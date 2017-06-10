from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'KEEPITSECRET.KEEPITSAFE.'


cemail = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
    if len(request.form['comments']) < 1:
        flash('You need to tell me something.')
        return redirect('/')
    elif len(request.form['comments']) > 120:
        flash('You talk too much.')
        return redirect('/')
    else:
        return redirect('/submitted')


@app.route('/submitted', methods=['POST'])
def submitted():
    first = request.form['first']
    last = request.form['last']
    language = request.form['language']
    like = request.form['like']
    comments = request.form['comments']
    return render_template('submitted.html', first=first, last=last, language=language, like=like, comments=comments)


app.run(debug=True)
