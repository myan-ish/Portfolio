import openai

openai.api_key = "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"

completion = openai.Completion.create(
    engine="text-davinci-003",
    prompt="Q: Is this hate speech? I hate you.",
    max_tokens=5,
    temperature=0,
    n=1,
)
print(completion.choices[0].text)
