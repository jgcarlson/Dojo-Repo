from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html", name="Jonathan")


app.run(debug=True)  # run our server
