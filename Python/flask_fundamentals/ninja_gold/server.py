from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'KEEPiTSECRET.KEEPITSAFE.'


@app.route('/')
def index():
    if 'total' in session:
        total = session['total']
        activity = session['activities']
    else:
        session['total'] = 0
        total = session['total']
        session['activities'] = []
        activity = session['activities']
    return render_template('index.html', total=total, activities=activity)


@app.route('/process_money', methods=['POST'])
def process():
    if request.form['action'] == 'farm':
        number = random.randint(10, 21)
        session['total'] += number
        session['activities'].insert(0, '<p>Went to a farm. Got ' + str(
            number) + ' gold.</p>')
    if request.form['action'] == 'cave':
        number = random.randint(5, 11)
        session['total'] += number
        session['activities'].insert(0, '<p>Went to a cave. Got ' + str(
            number) + ' gold.</p>')
    if request.form['action'] == 'house':
        number = random.randint(2, 6)
        session['total'] += number
        session['activities'].insert(0, '<p>Went to a house. Got ' + str(
            number) + ' gold.</p>')
    if request.form['action'] == 'casino':
        number = random.randint(-51, 51)
        session['total'] += number
        session['activities'].insert(0, '<p>Went to a casino. Got ' + str(
            number) + ' gold.</p>')
    return redirect('/')


app.run(debug=True)
