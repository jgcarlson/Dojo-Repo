from flask import Flask, render_template, request, redirect, session, flash
import re
app = Flask(__name__)
app.secret_key = 'KEEPITSECRET.KEEPITSAFE.'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
    if len(request.form['email']) < 1:
        flash(u'This field cannot be empty.', 'email')
        goodtogo = False
    elif not re.match(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', request.form['email']):
        flash(u'Please enter a valid email address.', 'email')
        goodtogo = False
    else:
        session['email'] = request.form['email']
    if len(request.form['first']) < 1:
        flash(u'This field cannot be empty.', 'first')
        goodtogo = False
    elif not request.form['first'].isalpha():
        flash(u'That name is not in an accepted format.', 'first')
        goodtogo = False
    else:
        session['first'] = request.form['first']
    if len(request.form['last']) < 1:
        flash(u'This field cannot be empty.', 'last')
        goodtogo = False
    elif not request.form['last'].isalpha():
        flash(u'That name is not in an accepted format.', 'last')
        goodtogo = False
    else:
        session['last'] = request.form['last']
    if len(request.form['password']) < 7:
        flash(u'Password must be at least 8 characters long.', 'password')
        goodtogo = False
    if not request.form['password'] == request.form['confirm']:
        flash(u'Passwords must match.', 'password')
        goodtogo = False
    else:
        session['password'] = request.form['password']
    return redirect('/')

    
app.run(debug=True)
