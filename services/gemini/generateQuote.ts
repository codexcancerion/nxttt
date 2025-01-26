import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig: any = {
    temperature: 1,
    topP: 0.9,       // Adjust topP for randomness
    topK: 50,        // Increase diversity in token selection
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

const sampleMotivationalQuotes = [
    "Success is not the destination; it's the courage to continue that counts.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dreams don’t work unless you do.",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "Great things never come from comfort zones.",
    "Do not wait for the right moment; create it.",
    "Your limitation—it’s only your imagination.",
    "Push yourself because no one else is going to do it for you.",
    "Failure is the opportunity to begin again, this time more intelligently. — Henry Ford",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "Don’t stop until you’re proud.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Small steps in the right direction can turn out to be the biggest steps of your life.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Doubt kills more dreams than failure ever will.",
    "What you get by achieving your goals is not as important as what you become by achieving them.",
    "Every day is a chance to be better than yesterday.",
    "Focus on the step in front of you, not the whole staircase.",
    "A river cuts through rock not because of its power, but because of its persistence.",
    "Your greatest power is your ability to choose your attitude."
  ];
  

// Generate a unique motivational quote
async function generateQuote(prompt: string) {
    const dynamicPrompt = `Find a qood quote from greatest men in history`;

    const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "What is a good motivational quote for today?" },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(prompt + " Follow these samples: " + sampleMotivationalQuotes.join("; "));
    return result.response.text();
}

// Generate a unique joke
async function generateJoke(prompt: string) {
    const dynamicPrompt = `Generate a funny and creative joke that is unexpected and different from any conventional jokes. Avoid clichés and ensure it is unique.`;

    const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "Tell me a joke, and make it unpredictable." },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
}


// Generate a unique motivational quote
async function generateQuotePrompt() {
    const dynamicPrompt = `Create a random prompt that would be used for a generative ai to produce a motivational quote for today.`;

    const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "Create a random prompt that would be used for a generative ai to produce a motivational quote for today" },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(dynamicPrompt);
    return result.response.text();
}

// Generate a unique motivational quote
async function generateJokePrompt() {
    const dynamicPrompt = `Create a random prompt that would be used for a generative ai to find a funny joke. Make it find jokes online that are original`;

    const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "Create a random prompt that would be used for a generative ai to find a funny joke." },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(dynamicPrompt);
    return result.response.text();
}

export { generateQuote, generateJoke, generateQuotePrompt, generateJokePrompt };
