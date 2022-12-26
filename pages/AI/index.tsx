import Link from "next/link";
import React, { useEffect, useState } from "react";
import DynamicHead from "../../layout/DynamicHead";
import axios from "axios";
import axiosInstance from "../../utils/axios.config";

const AI = () => {
  // function that calls the API by taking the input from the input field and returns the output
  const checkProfanityHateSpeech = async () => {
    const input = document.getElementById("input") as HTMLInputElement;
    const output = document.getElementById("output") as HTMLParagraphElement;
    output.innerHTML = "Loading...";
    await axiosInstance
      .post("/api/profanity_hate_speech_check/", {
        text: input.value,
      })
      .then((response) => {
        if (response.data.is_profanity_or_hate_speech == true) {
          output.innerHTML = "The string contains profanity or hate speech.";
        } else {
          output.innerHTML =
            "The string does not contain profanity or hate speech.";
        }
      });
  };

  return (
    <>
      <DynamicHead
        title="Profanity and Hate Speech Detection"
        description="This is profanity and hate speech detection page"
      />
      <div className="w-full flex flex-row">
        <div className="w-1/4"></div>
        <div className="flex-1 min-h-screen flex flex-col gap-y-16 px-8 py-12 w-1/2">
          <div className="flex flex-col gap-y-3">
            <div className="bg-body dark:bg-font flex flex-col gap-y-3">
              {/* Input field with submit button */}

              <h1>Profanity and Hate Speech Detection</h1>
              <h3>
                {" "}
                Testing the application of GPT-3 to find hate speech and
                profanity.
              </h3>
              <p>
                Enter a sentence and click submit to check if the string
                contains profanity or hate speech. Individudal character and
                words might not work.
              </p>
              <input
                type="text"
                id="input"
                name="input"
                placeholder="Enter a string"
                className="border-2 border-body dark:border-font p-2 text-black"
              />
              <button
                onClick={() => {
                  checkProfanityHateSpeech();
                }}
                className="bg-green-500 text-white rounded-lg p-2"
              >
                Submit
              </button>

              <h1 id="output"></h1>
            </div>
          </div>
          <h6>
            **Disclamier** This is only for testing. It might generate
            inconsitent results.
          </h6>
        </div>
        <div className="w-1/4"></div>
      </div>
    </>
  );
};

export default AI;
