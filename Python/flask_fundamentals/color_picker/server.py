from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/process', methods=['POST'])
def colorize():
    red = request.form['red']
    green = request.form['green']
    blue = request.form['blue']
    return render_template('index.html', red=red, green=green, blue=blue)


app.run(debug=True)  # run our server
