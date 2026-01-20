# Quick Start Guide

## Setup

1. **Get your Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Click "Create API Key"
   - Copy your API key

2. **Configure the app**
   - Open `.env.local` in the project root
   - Replace `your_gemini_api_key_here` with your actual API key
   - Save the file

3. **Install dependencies** (if not already done)
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Start chatting!

## Features Overview

### Chat Interface
- Type messages and press Send or Enter
- Messages appear in real-time
- Conversation history is maintained

### Token Tracking
- **Prompt Tokens**: Tokens used for your input
- **Completion Tokens**: Tokens used for AI response
- **Total Tokens**: Sum of both
- **Estimated Cost**: Real-time cost calculation

### Session Management
- Create multiple chat sessions with "New Chat"
- Switch between sessions in the sidebar
- Delete sessions with the trash icon
- Each session tracks its own statistics

### Export Chats
- Click "Export" button to download your chat
- Choose format:
  - **JSON**: Complete data with metadata
  - **Markdown**: Formatted chat with stats
  - **CSV**: Spreadsheet format

## Pricing Information

Current Gemini API pricing:
- Input: $0.075 per 1M tokens
- Output: $0.3 per 1M tokens

Costs are calculated in real-time for each message.

## Troubleshooting

**"Setup Required" message?**
- Check that `.env.local` has your API key
- Restart the dev server

**API errors?**
- Verify your API key is correct
- Check you have API quota remaining
- Ensure internet connection is working

**Chats not saving?**
- Check if localStorage is enabled
- Try clearing browser cache

## Building for Production

```bash
npm run build
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)
