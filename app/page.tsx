"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [quote, setQuote] = useState("Just do it!");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGenerate("quote");
  }, []);

  const handleGenerate = async (type: string) => {
    try {
      setLoading(true);
      if (type === "quote") {
        const response = await fetch("/api/generateQuote");
        const data = await response.json();
        setQuote(data.quote);
      } else {
        const response = await fetch("/api/generateJoke");
        const data = await response.json();
        setQuote(data.quote);
      }
    } catch (error) {
      console.log(error);
      setQuote("Just do it!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-indigo-100 via-white to-indigo-50 p-5">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl w-full">
        {/* <h1 className="text-2xl font-extrabold text-gray-800 text-center mb-5">
          Motivational Generator
        </h1> */}
        <div className="text-center">
          {loading ? (
            <p className="text-lg font-medium text-gray-600 animate-pulse">
              Finding the best {quote === "Just do it!" ? "quote" : "joke"} for
              you...
            </p>
          ) : (
            <p className="text-3xl font-semibold text-blue-600">{quote}</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out shadow-lg"
            onClick={() => handleGenerate("quote")}
          >
            Generate Quote
          </button>
          <button
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200 ease-in-out shadow-lg"
            onClick={() => handleGenerate("joke")}
          >
            Generate Joke
          </button>
        </div>
      </div>
    </div>
  );
}
