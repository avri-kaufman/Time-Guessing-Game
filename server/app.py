from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../client/build', static_url_path='')

# Serve React App
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

# Serve Static Files
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')