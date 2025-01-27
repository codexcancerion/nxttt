import { generateQuotePrompt, generateQuote } from "@/services/gemini/generateQuote";
import { NextResponse } from "next/server";

export async function GET() {
    const promptDraft = await generateQuotePrompt()
    const prompt = JSON.parse(promptDraft)
    const response = await generateQuote(prompt.response)
    const quote = JSON.parse(response)

    const response = NextResponse.json({
        success: true,
        quote: quote.response,
        message: "Successful generation"
    })

    
    // Adding CORS headers to allow any origin
    response.headers.set("Access-Control-Allow-Origin", "*");  // Allow any origin
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");  // Allow specific methods
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");  // Allow specific headers

    return response
}
