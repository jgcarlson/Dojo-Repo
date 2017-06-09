from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'KEEPITSECRET.KEEPITSAFE.'


@app.route('/')
def index():
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 1
    return render_template('index.html', counter=session['counter'])


@app.route('/process', methods=['POST'])
def process():
    session['counter'] += 1
    return redirect('index.html')


app.run(debug=True)
