import { generateQuotePrompt, generateQuote } from "@/services/gemini/generateQuote";
import { NextResponse } from "next/server";

export async function GET() {
    const promptDraft = await generateQuotePrompt()
    const prompt = JSON.parse(promptDraft)
    const response = await generateQuote(prompt.response)
    const quote = JSON.parse(response)

    return NextResponse.json({
        success: true,
        quote: quote.response,
        message: "Successful generation"
    })
}