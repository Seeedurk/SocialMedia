from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from flask_sqlalchemy import SQLAlchemy
import logging
import json

#Extremely important commands

#& "C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres -p 4000
#TRUNCATE TABLE message RESTART IDENTITY;
#db.session.add(Message(user = "Sedrik", text = "Hello from all the way in the database!"))
#db.session.commit()

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
        "text": "Send help! Andre keeps!"
        }
]
Posts = [{
        "user": "Sedrik",
        "text": "If your seeing this, this means very bad things"
}]

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

db = SQLAlchemy()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:13071418@localhost:4000/testdb'
db.init_app(app)


#Database Modelling
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(50), nullable=False)
    text = db.Column(db.String(500), nullable=False)
   


def create_database():
    with app.app_context():
        db.create_all()

        

#Muh Database Routes


#RESTful Routes
@app.route('/api/message')
def get_message():
    return jsonify(message="Helo from Flask backend!")

@app.route('/api/button', methods=['POST'])
def recieve_input():
    data = request.get_json()
    return jsonify(status="success", data=data)


#SocketIO Routes
@socketio.on('get_data')
def retrieve_data(data):
   emit('submit_response', {'message': 'Hello using websockets!'})

@socketio.on('init_posts')
def handle_post():
    Posts = [{"user": message.user, "text": message.text}
    for message in Message.query.order_by(Message.id.desc()).all()]
    emit('post_response', json.dumps(Posts))

@socketio.on('new_post')
def new_post(data):

    print(data)
    db.session.add(Message(user = data["user"], text = data["text"]))
    db.session.commit()
    Posts = [{"user": message.user, "text": message.text}
    for message in Message.query.order_by(Message.id.desc()).all()]
    emit('Render_response', json.dumps(Posts), broadcast=True)


if __name__ == '__main__':
    import os
    if os.environ.get("WERKZEUG_RUN_MAIN") == "true":
        create_database()
        
    socketio.run(app, port=5000, debug=True)


    

