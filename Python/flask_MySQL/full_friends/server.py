from flask import Flask, render_template, request, redirect
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'friends')


@app.route('/')
def index():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html', friends=friends)


@app.route('/create', methods=['POST'])
def create():
    query = "INSERT INTO friends(id, fname, lname, age, since, created) VALUES (id, :fname, :lname, :age, :since, NOW())"
    data = {'fname': request.form['fname'], 'lname': request.form['lname'],
            'age': request.form['age'], 'since': request.form['since']}
    print data
    mysql.query_db(query, data)
    return redirect('/')


app.run(debug=True)
