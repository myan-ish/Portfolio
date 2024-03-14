FROM python:3.9.16

EXPOSE 8000

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

RUN export DJANGO_SETTINGS_MODULE=core.settings
CMD gunicorn --bind=0.0.0.0:8000 --timeout 600 core.wsgi & celery -A core worker
