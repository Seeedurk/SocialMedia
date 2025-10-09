from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import logging
import json
import time

log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

users = [
    {"name": "Sedrik",
     "Authorization": "Supreme_Leader",
     "Age": 84}]

Post = [
    {
        "user": "Sedrik",
        "text": "Hello, I'm looking for a partner to join me on my adventures. I'm a skilled warrior and a loyal companion. If you're interested, please reach out to me! #Adventurer #PartnerWanted"
        },
    {
        "user": "Sedrik",
        "text": "Send help! Andre keeps touching me!"
        }
    ]

testing = [
    "I am a thigga message"]
app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/api/message')
def get_message():
    return jsonify(message="Helo from Flask backend!")

@app.route('/api/button', methods=['POST'])
def recieve_input():
    data = request.get_json()
    return jsonify(status="success", data=data)

@socketio.on('get_data')
def retrieve_data(data):
   emit('submit_response', {'message': 'Hello using websockets!'})

@socketio.on('init_posts')
def handle_post():
    emit('post_response', json.dumps(Post))

@socketio.on('new_post')
def new_post(data):
    Post.insert(0, data)
    print(Post)
    emit('Render_response', json.dumps(Post), broadcast=True)



if __name__ == '__main__':
    socketio.run(app, port=5000, debug=True)

    

