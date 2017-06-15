from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import os
import binascii
import re
import md5
app = Flask(__name__)
app.secret_key = 'abcdefghijklmnopqrstu'
mysql = MySQLConnector(app, 'userbase')


@app.route('/')
def index():
    initialize = ['username', 'fname', 'lname', 'email']
    for item in initialize:
        if item not in session:
            session[item] = ''
            print session['username'] == ''
            return render_template('index.html')
    if session['username'] != '':
        return redirect('/thesocialnetwork/<username>')


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
            session['id'] = user[0]['id']
            session['username'] = user[0]['username']
            session['fname'] = user[0]['fname']
            session['lname'] = user[0]['lname']
            session['email'] = user[0]['email']
            return redirect('/thesocialnetwork/' + username)
        else:
            flash('Wrong password....', 'danger')
    else:
        flash('Username is not a match....', 'danger')
    return redirect('/')
    # SET SESSION FOR NAMES, EMAIL, ETC - - >


@app.route('/register')
def register():
    initialize = ['username', 'fname', 'lname', 'email']
    for item in initialize:
        if item not in session:
            session[item] = ''
    print session['username']
    return render_template('register.html', username=session['username'], fname=session['fname'], lname=session['lname'], email=session['email'])


@app.route('/process', methods=['POST'])
def process():
    proceed = True
    session['xusername'] = request.form['username']
    session['xfname'] = request.form['fname']
    session['xlname'] = request.form['lname']
    session['xemail'] = request.form['email']
    data = {'username': session['xusername'], 'fname': session['xfname'],
            'lname': session['xlname'], 'email': session['xemail'], }
    if len(session['xusername']) < 2:
        flash('Please enter a username.', 'danger')
        proceed = False
    if len(session['xfname']) < 2:
        flash('Please enter a first name.', 'danger')
        proceed = False
    if len(session['xlname']) < 2:
        flash('Please enter a last name.', 'danger')
        proceed = False
    if len(session['xemail']) < 2:
        flash('Please enter a email address.', 'danger')
        proceed = False
    elif not re.match(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', session['xemail']):
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
        register = {'username': session['xusername'], 'fname': session['xfname'],
                    'lname': session['xlname'], 'email': session['xemail'], 'password': hashed_pw, 'salt': salt}
        insert = "INSERT INTO users(id, username, fname, lname, email, password, salt) VALUES (id, :username, :fname, :lname, :email, :password, :salt)"
        mysql.query_db(insert, register)
        username = request.form['username']
        query = "SELECT * FROM users WHERE username = :username"
        data = {'username': username}
        user = mysql.query_db(query, data)
        session['id'] = user[0]['id']
        session['username'] = user[0]['username']
        session['fname'] = user[0]['fname']
        session['lname'] = user[0]['lname']
        session['email'] = user[0]['email']
        return redirect('/thesocialnetwork/' + username)
    else:
        return redirect('/register')


@app.route('/thesocialnetwork/<username>', methods=['GET', 'POST'])
def success(username):
    if session['username'] != '':
        fname = session['fname']
        username = session['username']
        return render_template('success.html', fname=fname)
    else:
        flash('Please sign up or log in to view that page.', 'danger')
        return redirect('/')


@app.route('/logout', methods=['POST', 'GET'])
def logout():
    session.pop('id', None)
    session.pop('username', None)
    session.pop('fname', None)
    session.pop('lname', None)
    session.pop('email', None)
    flash('You successfully logged out.', 'success')
    return redirect('/')


@app.route('/users', methods=['POST', 'GET'])
def users():
    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    return render_template('users.html', users=users)


@app.route('/add', methods=['POST', 'GET'])
def add():
    id = session['id']
    friend = request.form['add']
    query0 = "INSERT INTO friends(id, friend) VALUES (:id, :friend)"
    data0 = {'id': id, 'friend': friend}
    mysql.query_db(query0, data0)
    query1 = "INSERT INTO friends(id, friend) VALUES (:friend, :id)"
    data1 = {'id': id, 'friend': friend}
    mysql.query_db(query1, data1)
    return redirect('/users')


@app.route('/myfriends', methods=['POST', 'GET'])
def myfriends():
    id = session['id']
    data = {'id': id}
    query = "SELECT * FROM users JOIN friends ON users.id = friends.id WHERE friends.friend = :id"
    users = mysql.query_db(query, data)
    container = []
    i = 1
    while i < len(users):
        friendid = users[i]['friend']
        container.append(friendid)
        i = i + 1
    return render_template('myfriends.html', users=users)


@app.route('/wall', methods=['POST', 'GET'])
def wall():
    query = "SELECT * FROM messages; SELECT * FROM comments"
    posts = mysql.query_db(query)
    print posts
    return render_template('wall.html', posts=posts)


@app.route('/submit', methods=['POST'])
def submit():
    poster = session['username']
    m_title = request.form['title']
    m_text = request.form['post']
    data = {'poster': poster, 'm_title': m_title, 'm_text': m_text}
    query = "INSERT INTO messages(post_id, poster, m_title, m_text, post_time) VALUES (post_id, :poster, :m_title, :m_text, NOW())"
    mysql.query_db(query, data)
    return redirect('/wall')


@app.route('/comment', methods=['POST'])
def comment():
    commenter = session['username']
    c_text = request.form['comment']
    data = {'commenter': commenter, 'c_text': c_text}
    query = "INSERT INTO comments(comment_id, commenter, c_text, comment_time) VALUES (comment_id, :commenter, :c_text, NOW())"
    mysql.query_db(query, data)
    return redirect('/wall')


app.run(debug=True)
