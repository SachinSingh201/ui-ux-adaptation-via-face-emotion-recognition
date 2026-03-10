from flask import Blueprint, jsonify

course_bp = Blueprint("course", __name__)

@course_bp.route("/courses", methods=["GET"])
def get_courses():

    courses = [
        {
            "id": 1,
            "title": "CampusX Machine Learning",
            "video": "https://www.youtube.com/embed/UZPfbG0jNec"
        }
    ]

    return jsonify(courses)