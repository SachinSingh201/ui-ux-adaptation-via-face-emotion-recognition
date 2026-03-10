from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth", __name__)

users = []

@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.json
    users.append(data)
    return jsonify({"message": "User registered successfully"})


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json

    for user in users:
        if user["email"] == data["email"] and user["password"] == data["password"]:
            return jsonify({"message": "Login successful", "user": user})

    return jsonify({"message": "Invalid credentials"}), 401