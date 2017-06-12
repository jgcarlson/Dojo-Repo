from flask import Flask, render_template, request, redirect, session, flash
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
    session['first'] = request.form['first']
    session['last'] = request.form['last']
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
