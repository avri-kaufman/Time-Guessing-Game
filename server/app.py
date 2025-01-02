from flask import Flask, send_from_directory, jsonify, request
from flask_mysqldb import MySQL
from dotenv import load_dotenv
import os
import sys
import datetime
from datetime import datetime

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), './utils')))

from utils.time_utils import get_time_at_location

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

# Serve get all locations end point
@app.route('/api/locations', methods=['GET'])
def get_location():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM location')
    data = cur.fetchall()
    cur.close()
    locations = [{'id': row[0], 'name': row[1]} for row in data]
    return jsonify(locations)

def get_location_by_id(location_id):
    cur = db.connection.cursor()
    cur.execute('SELECT name FROM location WHERE id = %s', (location_id,))
    result = cur.fetchone()
    cur.close()
    return result[0] if result else None

# Serve submit guess end point
@app.route('/api/guesses', methods=['POST'])
def create_guess():
    
    cur = db.connection.cursor()
    user_id = request.json['user_id']
    location_id = request.json['location_id']
    time_guessed = datetime.strptime(request.json['time_guess'], '%H:%M:%S').time()
    cuntry_name = get_location_by_id(location_id)
    actual_time = get_time_at_location(cuntry_name)
    cur.execute('INSERT INTO guess (user_id, location_id, time_guessed, actual_time) VALUES (%s, %s, %s, %s)', (user_id, location_id, time_guessed, actual_time))
    db.connection.commit()
    cur.close()
    return jsonify({'message': 'Guess added successfully'})

# Serve get user guesses    
@app.route('/api/guesses/<int:id>', methods=['GET'])
def get_user_guesses(id):
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM guess WHERE user_id= %s', (id,))
    data = cur.fetchall()
    cur.close()
    guesses = [
        {'id': row[0], 'user_id': row[1], 'location_id': row[2], 'time_guessed': row[3], 'actual_time': row[4]}
        for row in data
    ]
    return jsonify(guesses)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')