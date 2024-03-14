from django.urls import include, path

from general.views import ProfanityAndHateSpeechChecker


urlpatterns = [
    path("profanity_hate_speech_check/", ProfanityAndHateSpeechChecker.as_view()),
]
