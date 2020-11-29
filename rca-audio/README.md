Микросервис для преобразования голосовых аудиофайлов в текстовое представление.

Для запуска нужно: 
1. Установить Python версии 3.8 и выше.

2. Установить SWIG (нужен для модуля обработки голоса)
    - WIN: скачать архив, например, [здесь](https://netix.dl.sourceforge.net/project/swig/swigwin/swigwin-3.0.12/swigwin-3.0.12.zip). После загрузки и распаковки архива добавляем путь к файлам в path окружения
    - Linux/Ubuntu: `sudo apt install swig`
3. Устанавить Microsoft Visual C++ 14.0 и выше
    - WIN: можно установить с помощью [VS Installer]( https://visualstudio.microsoft.com/visual-cpp-build-tools/)
    - Linux/Ubuntu: не должна требоваться
     
    *Последующие команды выполняются в директории проекта*

4. Создать и запустить виртуальное окружение:
    - `python3 -m venv env`
    - `.\venv\Scripts\activate`
5. Установить зависимые пакеты командой `pip install requirements.txt`
6. Скачать русские языковую и акустическую модели [здесь](https://drive.google.com/file/d/1gUlq97lDrkU0BT8vQu_J6C7KPWNawXaR/view?usp=sharing) (используется в рамках хакатона, при реализации проекта модель создается под проект и нужды заказчика)
    - архив распаковываем и кладем в папку `venv/Lib/site-packages/speech_recognition/pocketsphinx-data/`
7. Установить переменную окружения для запуска приложения. 
    - WIN: `set FLASK_APP=run.py`
    - Linux/Ubuntu: `export FLASK_APP=run.py`
8. Запустить сервер `flask run`
