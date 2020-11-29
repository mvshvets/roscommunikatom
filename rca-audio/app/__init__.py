from flask import Flask

from config import Config
from extensions import cors, api
from app.speech_rec import ns as ns_speech_rec


def create_app(config_object=Config):
    app = Flask(__name__)
    app.config.from_object(config_object)
    register_extensions(app)

    return app


def register_extensions(app):
    cors.init_app(app, supports_credentials=True)

    api.init_app(app, version='1.0', title='Swagger API',
                 description='API для обработки аудио команд')

    api.add_namespace(ns_speech_rec)

