from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'KEEPITSECRET.KEEPITSAFE.'


@app.route('/')
def index():
    if 'total' in session:
        print 'session has total', session['total']
    else:
        session['total'] = 0
        print 'session starting with total of ', session['total']
    return render_template('index.html')


@app.route('/process_money', methods=['POST'])
def process():
    if request.form['farm']:
        session['total'] += random.randint(10, 21)
        print session['total']
    return redirect('/')


app.run(debug=True)
