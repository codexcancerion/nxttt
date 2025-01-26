"use client"

import { useState, useEffect } from "react"

export default function Page() {
  const [quote, setQuote] = useState("Just do it!")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleGenerate("quote")
  }, [])

  const handleGenerate = async (type: string) => {
    try {
      setLoading(true)
      if (type === "quote") {
        const response = await fetch('/api/generateQuote')
        const data = await response.json()
        setQuote(data.quote)
      }
      else {
        const response = await fetch('/api/generateJoke')
        const data = await response.json()
        setQuote(data.quote)
      }
    } catch (error) {
      setQuote("Just do it!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-5 w-full h-screen justify-center items-center px-40">
        {loading ?
          <p>Finding the best quote for you ... </p>
          : <p className="text-4xl font-bold text-blue-700 text-center">{quote}</p>
        }
        <button className="p-5 bg-purple-200 rounded-xl" onClick={() => handleGenerate("quote")}>Generate Quote</button>
        <button className="p-5 bg-purple-200 rounded-xl" onClick={() => handleGenerate("joke")}>Generate Joke</button>
      </div>
    </>
  )
}