from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'dasfasdf'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submitted', methods=['POST'])
def getInfo():
    name = request.form['name']
    email = request.form['email']
    choice = request.form['choice']
    lang = request.form['fav_language']
    if len(request.form['text']) < 1:
        flash('Please enter some text.')
    elif len(request.form['text']) > 120:
        flash('That comment is too long.')
    else:
        text = request.form['text']
    return render_template('submitted.html', name=name, email=email, choice=choice, lang=lang, text=text)


app.run(debug=True)  # run our server
