import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const geminiModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

export const geminiGenerationConfig: any = {
    temperature: 1,
    topP: 0.9,       
    topK: 50,        
    maxOutputTokens: 1024, 
    responseMimeType: "application/json",
    responseSchema: {
        type: "object",
        properties: {
            response: {
                type: "string",
            },
        },
    },
};