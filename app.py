import os
import requests

from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = "sldkfjsls"
socketio = SocketIO(app)

@app.route('/')
def home():
    return render_template("index.html")

@socketio.on("kewl beanz added")
def count():
    emit("add one beanz", broadcast=True)

if __name__ == '__main__':
    socketio.run(app)