from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

    
def goNinja():
    return redirect("/ninjas")


@app.route('/ninjas')
def ninjas():
    return render_template("ninjas.html")


@app.route('/dojos/new')
def dojos():
    return render_template("dojos.html", action="")


app.run(debug=True)  # run our server
