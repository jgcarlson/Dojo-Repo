from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/ninja')
def ninja():
    return render_template('ninja.html')


@app.route('/ninja/<color>')
def colorize(color):
    if (color == 'blue') or (color == 'orange') or (color == 'red') or (color == 'purple'):
        return render_template(color + '.html')
    else:
        return render_template('notapril.html')


@app.route('/ninja/<path:path>')
def catch_all(path):
    return render_template('notapril.html')


app.run(debug=True)  # run our server
