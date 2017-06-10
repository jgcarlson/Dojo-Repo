from flask import Flask, render_template, request, redirect, session, flash
import re
app = Flask(__name__)
app.secret_key = 'KEEPITSECRET.KEEPITSAFE.'


@app.route('/')
def index():
    if session['email'] in session:
        print 'yes' + session['email']
    else:
        email = session['email']
        print 'no' + email
    return render_template('index.html', email=email)


@app.route('/process', methods=['POST'])
def process():
    if len(request.form['email']) < 1:
        flash(u'This field cannot be empty.', 'email')
    elif not re.match(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', request.form['email']):
        flash(u'Please enter a valid email address.', 'email')
    else:
        session['email'] = request.form['email']
        print session['email']
    if len(request.form['first']) < 1:
        flash(u'This field cannot be empty.', 'first')
    if len(request.form['last']) < 1:
        flash(u'This field cannot be empty.', 'last')
    if len(request.form['password']) < 1:
        flash(u'This field cannot be empty.', 'password')
    if len(request.form['confirm']) < 1:
        flash(u'This field cannot be empty.', 'confirm')
    # return cname
    return redirect('/')


app.run(debug=True)
