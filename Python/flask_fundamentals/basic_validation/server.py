from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
    if len(request.form['name']) < 1:
        # just pass a string to the flash function
        flash("Name cannot be empty!")
    else:
        # just pass a string to the flash function
        flash("Success! Your name is {}".format(request.form['name']))
    # either way the application should return to the index and display the message
    return redirect('/')


app.run(debug=True)
