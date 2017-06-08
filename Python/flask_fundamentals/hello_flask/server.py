from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/about')
def about():
    return 'This is a long paragraph about myself. This is a long paragraph about myself. This is a long paragraph about myself. This is a long paragraph about myself. This is a long paragraph about myself. This is a long paragraph about myself.'


@app.route('/project')
def project():
    return 'I work on projects.'


app.run(debug=True)
