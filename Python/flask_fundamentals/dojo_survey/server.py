from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submitted', methods=['POST'])
def getInfo():
    name = request.form['name']
    email = request.form['email']
    choice = request.form['choice']
    lang = request.form['fav_language']
    text = request.form['text']
    return render_template('submitted.html', name=name, email=email, choice=choice, lang=lang, text=text)


app.run(debug=True)  # run our server
