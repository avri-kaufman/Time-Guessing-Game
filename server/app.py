from flask import Flask, send_from_directory, jsonify
from flask_mysqldb import MySQL
from dotenv import load_dotenv, dotenv_values
import os

load_dotenv('..')
app = Flask(__name__, static_folder='../client/build', static_url_path='')
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')
db = MySQL(app=app)

# Serve React App
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

# Serve Static Files
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

# Serve get all locations end points
@app.route('/api/location', methods=['GET'])
def get_location():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM location')
    data = cur.fetchall()
    cur.close()
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')