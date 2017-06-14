from flask import Flask, render_template
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'friends')


@app.route('/')
def index():
    return render_template('index.html')



# an example of running a query
print mysql.query_db("SELECT * FROM friends")
app.run(debug=True)
