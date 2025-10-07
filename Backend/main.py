from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/message')
def get_message():
    return jsonify(message="Helo from Flask backend!")

@app.route('/api/button', methods=['POST'])
def recieve_input():
    data = request.get_json()
    print("Recieved data: ", data)
    return jsonify(status="success", data=data)

if __name__ == '__main__':
    app.run(port=5000, debug=False)


