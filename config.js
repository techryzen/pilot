// Configuration file for Captain AI Chatbot
// Replace 'your-openai-api-key-here' with your actual OpenAI API key

const CONFIG = {
    OPENAI_API_KEY: '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',
    MODEL: 'gpt-4o-mini',
    MAX_TOKENS: 2000,
    TEMPERATURE: 0.7
};

// Make config available globally
window.CHATBOT_CONFIG = CONFIG;