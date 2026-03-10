from flask import Blueprint, jsonify
import random

emotion_bp = Blueprint("emotion", __name__)

@emotion_bp.route("/detect-emotion", methods=["GET"])
def detect_emotion():

    emotions = ["happy", "sad", "angry", "neutral"]

    emotion = random.choice(emotions)

    return jsonify({"emotion": emotion})