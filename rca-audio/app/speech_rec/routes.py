from flask_restx import Resource, Namespace, fields
from werkzeug.datastructures import FileStorage
from app.speech_rec.utils import allowed_file, ALLOWED_EXTENSIONS
import speech_recognition as sr

ns = Namespace('AudioCommand', description='Обработка аудио команд', path='/audio-command')

model_output_upload = ns.model('AudioCommandUploadOutput', {
    'text_from_audio': fields.String,
})

upload_parser = ns.parser()
upload_parser.add_argument('file', type=FileStorage, location='files', required=True)


@ns.route('')
class AudioCommand(Resource):

    @ns.doc(responses={500: 'Неизвестная ошибка'},
            body=upload_parser)
    @ns.response(200, 'OK', model_output_upload)
    def post(self):
        """
        Обработка аудио команд
        """

        args = upload_parser.parse_args()
        uploaded_file = args['file']

        if not allowed_file(uploaded_file.filename):
            return {
                "message": "Отправьте аудио файл в формате: {}".format(', '.join(ALLOWED_EXTENSIONS))
            }

        if uploaded_file:

            # читаем аудио
            r = sr.Recognizer()

            with sr.AudioFile(uploaded_file) as source:
                audio = r.record(source)

            # используем Sphinx
            try:
                decipherment = r.recognize_sphinx(audio, language="ru-RU")
            except sr.UnknownValueError:
                return {
                    "message": "Аудио файл не распознан",
                }
            except sr.RequestError as e:
                return {
                    "message": "Ошибка обработки файла{0}".format(e)
                }

            return {
                "text_from_audio": decipherment,
            }
