import openai

openai.api_key = "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"


def check_profanity_or_hate_speech(text):
    completion = openai.Completion.create(
        engine="text-babbage-001",
        prompt=f"Q: Is the following sentence hate speech or contains profanity?(Yes/No) {text}",
        temperature=0,
        max_tokens=5,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
    )
    response = completion.choices[0].text

    print(completion)

    if "yes" in response or "Yes" in response:
        return True
    else:
        return False