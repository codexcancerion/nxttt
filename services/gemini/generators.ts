import { geminiGenerationConfig, geminiModel } from "./config";
import { sampleMotivationalQuotes } from "./statics";

async function generateQuote(dynamicPrompt: string) {
    const staticPrompt = `Generate an original motivational quote that inspires positivity, resilience, and self-improvement. Keep it concise, impactful, and easy to remember. Avoid clichés and ensure it feels fresh and empowering. Example themes include perseverance, confidence, success, and overcoming challenges.`;

    const chatSession = geminiModel.startChat({
        generationConfig: geminiGenerationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "Generate an original motivational quote that inspires positivity, resilience, and self-improvement. Keep it concise, impactful, and easy to remember. Avoid clichés and ensure it feels fresh and empowering. Example themes include perseverance, confidence, success, and overcoming challenges." },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(dynamicPrompt + " You may look from these samples to create one: " + sampleMotivationalQuotes.join("; ") + " . I just need one.");
    return result.response.text();
}

async function generateJoke(dynamicPrompt: string) {
    const staticPrompt = `Generate a short and original joke that is clever, funny, and easy to understand. The joke can be a pun, a one-liner, or a classic setup-and-punchline format. Keep it lighthearted and appropriate for a general audience. Example themes include everyday life, technology, animals, or wordplay. Avoid offensive or overly complex humor.  
    `;

    const chatSession = geminiModel.startChat({
        generationConfig: geminiGenerationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: staticPrompt },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(dynamicPrompt);
    return result.response.text();
}

async function generateQuotePrompt() {
    const staticPrompt = `Create a random prompt that would be used for a generative ai to produce a motivational quote for today.`;

    const chatSession = geminiModel.startChat({
        generationConfig: geminiGenerationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: staticPrompt },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(staticPrompt);
    return result.response.text();
}

async function generateJokePrompt() {
    const staticPrompt = `Create a random prompt that would be used for a generative ai to find a funny joke. I want it to generate a short and original joke that is clever, funny, and easy to understand. The joke can be a pun, a one-liner, or a classic setup-and-punchline format. Keep it lighthearted and appropriate for a general audience. Example themes include everyday life, technology, animals, or wordplay. Avoid offensive or overly complex humor.`;

    const chatSession = geminiModel.startChat({
        generationConfig: geminiGenerationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: staticPrompt },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(staticPrompt);
    return result.response.text();
}

export { generateQuote, generateJoke, generateQuotePrompt, generateJokePrompt };
