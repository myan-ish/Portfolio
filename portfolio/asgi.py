import os

from django.portfolio.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio.settings")

application = get_asgi_application()
