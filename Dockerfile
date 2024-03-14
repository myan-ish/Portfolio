FROM python:3.9.16

EXPOSE 8001

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

RUN export DJANGO_SETTINGS_MODULE=portfolio.settings
CMD gunicorn --bind=0.0.0.0:8001 --timeout 600 portfolio.wsgi