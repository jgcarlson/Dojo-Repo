from flask import Flask, render_template, request, redirect, session, flash
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = 'abc'
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'emailsdb')

entries = []


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
    session['entry'] = request.form['email']
    entries.append(session['entry'])
    data = {'email': request.form['email']}
    query = "SELECT email FROM emails WHERE email = :email"
    result = mysql.query_db(query, data)
    query2 = "INSERT INTO entries(id, email, time) VALUES (id, :email, NOW())"
    mysql.query_db(query2, data)
    if result == []:
        flash(u'We don\'t have that email in our database. Try again.', 'danger')
    else:
        return redirect('/success')
    print entries
    return redirect('/')


@app.route('/success')
def success():
    flash(u'That email is a match!', 'success')
    query = "SELECT * FROM entries"
    result = mysql.query_db(query)
    return render_template('success.html', result=result)


app.run(debug=True)
