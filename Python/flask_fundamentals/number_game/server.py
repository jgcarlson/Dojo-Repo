from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'KEEPITSECRET.KEEPITSAFE.'


@app.route('/')
def index():
    statement = ''
    hint = ''
    guess = ''
    status = 'hidden'
    if not 'guess' in session:
        session['number'] = random.randint(1, 101)
    if 'guess' in session:
        print session['number']
        guess = session['guess']
        if int(session['guess']) > (session['number']):
            hint = 'Guess a lower number.'
            statement = ''
        elif int(session['guess']) < int(session['number']):
            hint = 'Guess a higher number.'
            statement = ''
        elif int(session['guess']) == int(session['number']):
            hint = ''
            statement = 'Congratulations! You guessed it!'
            status = 'inherit'
    return render_template('index.html', hint=hint, statement=statement, guess=guess, status=status)


@app.route('/process', methods=['POST'])
def process():
    if request.form['guess'] != '':
        session['guess'] = request.form['guess']
    return redirect('/')


@app.route('/reset', methods=['POST'])
def reset():
    session.pop('guess')
    return redirect('/')


app.run(debug=True)
