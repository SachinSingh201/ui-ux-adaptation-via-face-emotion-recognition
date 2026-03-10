from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth_bp
from routes.course_routes import course_bp
from routes.emotion_routes import emotion_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth_bp)
app.register_blueprint(course_bp)
app.register_blueprint(emotion_bp)

if __name__ == "__main__":
    app.run(debug=True)