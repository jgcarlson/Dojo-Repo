from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import os
import binascii
import re
import md5
app = Flask(__name__)
app.secret_key = 'abcdefghijk'
mysql = MySQLConnector(app, 'userbase')


@app.route('/')
def index():
    initialize = ['username', 'fname', 'lname', 'email']
    for item in initialize:
        if item not in session:
            session[item] = ''
        if session['username'] == session['username'] and session['username'] != '':
            return redirect('/thesocialnetwork/<usr>')
        # else:
        #     session['username'] = request.form['username']
        #     username = session['username']
        #     query = "SELECT * FROM users WHERE username = :username"
        #     data = {'username': username}
        #     user = mysql.query_db(query, data)
        #     if user != []:
        #         return redirect('/thesocialnetwork/<usr>')
        return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    query = "SELECT * FROM users WHERE username = :username"
    data = {'username': username}
    user = mysql.query_db(query, data)
    if user != []:
        encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
        if user[0]['password'] == encrypted_password:
            session['username'] = request.form['username']
            return redirect('/thesocialnetwork/<usr>')
        else:
            flash('Wrong password....', 'danger')
    else:
        flash('Username is not a match....', 'danger')
    return redirect('/')


@app.route('/register')
def register():
    initialize = ['username', 'fname', 'lname', 'email']
    for item in initialize:
        if item not in session:
            session[item] = ''
    return render_template('register.html', username=session['username'], fname=session['fname'], lname=session['lname'], email=session['email'])


@app.route('/process', methods=['POST'])
def process():
    proceed = True
    session['username'] = request.form['username']
    session['fname'] = request.form['fname']
    session['lname'] = request.form['lname']
    session['email'] = request.form['email']
    data = {'username': session['username'], 'fname': session['fname'],
            'lname': session['lname'], 'email': session['email'], }
    if len(session['username']) < 2:
        flash('Please enter a username.', 'danger')
        proceed = False
    if len(session['fname']) < 2:
        flash('Please enter a first name.', 'danger')
        proceed = False
    if len(session['lname']) < 2:
        flash('Please enter a last name.', 'danger')
        proceed = False
    if len(session['email']) < 2:
        flash('Please enter a email address.', 'danger')
        proceed = False
    elif not re.match(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', session['email']):
        flash('That\'s not an email address.', 'danger')
        proceed = False
    query_username = "SELECT username FROM users WHERE username = :username"
    query_email = "SELECT email FROM users WHERE email = :email"
    result_username = mysql.query_db(query_username, data)
    result_email = mysql.query_db(query_email, data)
    if result_username != []:
        flash('That username is taken.', 'danger')
        proceed = False
    if result_email != []:
        flash('That email is already associated with another account.', 'danger')
        proceed = False
    if len(request.form['password']) < 8:
        flash('Your password isn\'t long enough.', 'danger')
        proceed = False
    elif request.form['password'] != request.form['confirm']:
        flash('Your passwords don\'t match.')
        proceed = False
    else:
        password = request.form['password']
        salt = binascii.b2a_hex(os.urandom(15))
        hashed_pw = md5.new(password + salt).hexdigest()
    if proceed == True:
        register = {'username': session['username'], 'fname': session['fname'],
                    'lname': session['lname'], 'email': session['email'], 'password': hashed_pw, 'salt': salt}
        query = "INSERT INTO users(id, username, fname, lname, email, password, salt) VALUES (id, :username, :fname, :lname, :email, :password, :salt)"
        mysql.query_db(query, register)
        return redirect('/thesocialnetwork/<usr>')
    else:
        return redirect('/register')


@app.route('/thesocialnetwork/<usr>', methods=['GET', 'POST'])
def success(usr):
    session['username'] = request.form['username']
    usr = session['username']
    username = session['username']
    query = "SELECT fname FROM users WHERE username = :username"
    data = {'username': session['username']}
    name = mysql.query_db(query, data)
    fname = name[0]['fname']
    return render_template('success.html', fname=fname)


@app.route('/logout', methods=['POST', 'GET'])
def logout():
    session.pop('username', None)
    flash('You successfully logged out.', 'success')
    return redirect('/')


app.run(debug=True)
