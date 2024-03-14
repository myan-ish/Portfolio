from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from general.utils import check_profanity_or_hate_speech


class ProfanityAndHateSpeechChecker(APIView):
    def post(self, request):
        text = request.data.get("text", None)
        if text is None:
            return Response(
                data={
                    "message": "Text is required to check for profanity or hate speech."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        is_profanity_or_hate_speech = check_profanity_or_hate_speech(text)
        return Response(
            data={"is_profanity_or_hate_speech": is_profanity_or_hate_speech},
            status=status.HTTP_200_OK,
        )
