from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'KEEPITSECRT.KEEPITSAFE.'


@app.route('/', methods=['GET', 'POST'])
def index():
    if 'first' in session:
        print 'there is first'
    else:
        print 'it is working'
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
    return redirect('/')


@app.route('/drop', methods=['POST'])
def drop():
    session.pop('first', None)
    print 'dropped'
    return redirect('/')


app.run(debug=True)
