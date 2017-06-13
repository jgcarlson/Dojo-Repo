from flask import Flask, render_template, request, redirect, session, flash
import re
app = Flask(__name__)
app.secret_key = 'KEEPITSECRT.KEEPITSAFE.'


@app.route('/', methods=['GET', 'POST'])
def index():
    if 'first' in session:
        print 'there is first'
    else:
        print 'it is working'
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
    ready = True
    if request.form['first'].isalpha():
        session['first'] = request.form['first']
    else:
        flash('Please enter name in correct format.')
        ready = False
    if request.form['last'].isalpha():
        session['last'] = request.form['last']
    else:
        flash('Please enter name in correct format.')
        ready = False
    if len(request.form['email']) < 1:
        flash('Please enter an email address.')
        ready = False
    elif not re.match(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', request.form['email']):
        flash('Please enter email address in correct format.')
        ready = False
    else:
        session['email'] = request.form['email']
    session['dob'] = request.form['dob']
    session['time'] = request.form['time']
    session['password'] = request.form['password']
    session['confirm'] = request.form['confirm']
    return redirect('/')


@app.route('/info', methods=['POST'])
def info():
    first = session['first']
    last = session['last']
    email = session['email']
    dob = session['dob']
    time = session['time']
    return render_template('info.html', first=first, last=last, email=email, dob=dob, time=time)


@app.route('/drop', methods=['POST'])
def drop():
    session.pop('first', None)
    session.pop('last', None)
    session.pop('email', None)
    session.pop('dob', None)
    session.pop('time', None)
    print 'dropped'
    return redirect('/')


app.run(debug=True)
