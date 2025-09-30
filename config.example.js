// Configuration file for Captain AI Chatbot
// Copy this file to config.js and replace the placeholder with your actual OpenAI API key

const CONFIG = {
    OPENAI_API_KEY: 'your-openai-api-key-here',
    MODEL: 'gpt-4o-mini',
    MAX_TOKENS: 2000,
    TEMPERATURE: 0.7
};

// Make config available globally
window.CHATBOT_CONFIG = CONFIG;