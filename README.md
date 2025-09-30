# Captain AI Chatbot - GitHub Pages Ready

A modern, responsive AI chatbot interface powered by OpenAI's GPT models, designed for deployment on GitHub Pages.

## 🚀 Features

- **Direct OpenAI Integration**: No backend server required
- **Image Support**: Upload and analyze images with AI
- **Responsive Design**: Works on desktop and mobile
- **GitHub Pages Compatible**: Pure static files
- **Secure Configuration**: API key stored separately from main code

## 📋 Setup Instructions

### 1. Configure Your API Key

1. Copy the example configuration file:
   ```bash
   cp config.example.js config.js
   ```

2. Edit `config.js` and replace `your-openai-api-key-here` with your actual OpenAI API key:
   ```javascript
   const CONFIG = {
       OPENAI_API_KEY: 'sk-proj-your-actual-api-key-here',
       MODEL: 'gpt-4o-mini',
       MAX_TOKENS: 2000,
       TEMPERATURE: 0.7
   };
   ```

### 2. Deploy to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `gh-pages`)
4. Your chatbot will be available at `https://yourusername.github.io/repository-name`

## 🔒 Security Notes

- The `config.js` file is ignored by Git (see `.gitignore`)
- Your API key will only be visible to you and your website visitors
- For public repositories, consider the security implications of client-side API keys
- Monitor your OpenAI usage to prevent unexpected charges

## 🛠️ Local Development

To test locally:

```bash
# Start a local server
python3 -m http.server 8000

# Or use any other static file server
# Then visit http://localhost:8000
```

## 📁 File Structure

```
├── index.html          # Main HTML file
├── script.js           # Chatbot functionality
├── styles.css          # Styling
├── config.js           # API configuration (not in Git)
├── config.example.js   # Configuration template
├── .gitignore          # Git ignore rules
├── .nojekyll           # GitHub Pages configuration
└── README.md           # This file
```

## 🎨 Customization

You can customize the chatbot by modifying:

- **Appearance**: Edit `styles.css`
- **Behavior**: Modify `script.js`
- **AI Settings**: Update `config.js`
- **System Prompt**: Change the system prompt in `script.js`

## 📞 Support

For issues or questions, please check the OpenAI API documentation or create an issue in this repository.