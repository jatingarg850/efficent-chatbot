# Gemini Chat - AI Chatbot with Token Tracking

A modern Next.js web application for chatting with Google's Gemini AI model with real-time token usage tracking, cost analysis, and chat export features.

## Features

- **Real-time Chat Interface** - Clean, responsive chat UI with message history
- **Token Tracking** - Monitor prompt tokens, completion tokens, and total tokens used
- **Cost Analysis** - Real-time cost calculation based on Gemini API pricing
- **Multiple Sessions** - Create and manage multiple chat sessions
- **Session Persistence** - All chats are saved to browser localStorage
- **Export Options** - Export chats in JSON, Markdown, or CSV formats
- **Statistics Dashboard** - View detailed stats for each session
- **Responsive Design** - Works on desktop and mobile devices

## Prerequisites

- Node.js 18+ and npm
- Google Gemini API key (get it from [Google AI Studio](https://makersuite.google.com/app/apikey))

## Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd gemini-chatbot
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Starting a Chat
- Click "New Chat" in the sidebar to create a new conversation
- Type your message and press Send or Enter

### Viewing Statistics
- Token usage and estimated costs are displayed at the bottom of each chat
- Statistics update in real-time as you send messages

### Exporting Chats
- Click the "Export" button in the top-right corner
- Choose your preferred format:
  - **JSON** - Complete chat data with metadata
  - **Markdown** - Formatted chat with statistics
  - **CSV** - Spreadsheet-compatible format

### Managing Sessions
- Click any session in the sidebar to switch between chats
- Hover over a session and click the trash icon to delete it
- Session costs are displayed under each session title

## Pricing

Current Gemini API pricing (as of 2024):
- **Input tokens**: $0.075 per 1M tokens
- **Output tokens**: $0.3 per 1M tokens

Costs are calculated and displayed in real-time for each message.

## Project Structure

```
gemini-chatbot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main chat page
│   └── globals.css               # Global styles
├── components/
│   ├── ChatWindow.tsx            # Message display
│   ├── InputBox.tsx              # Message input
│   ├── StatsPanel.tsx            # Statistics display
│   ├── Sidebar.tsx               # Session management
│   └── ExportMenu.tsx            # Export functionality
├── lib/
│   ├── types.ts                  # TypeScript types
│   ├── gemini.ts                 # Gemini API integration
│   └── storage.ts                # LocalStorage management
└── .env.local                    # Environment variables
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google Generative AI SDK** - Gemini API integration
- **Lucide React** - Icons

## API Integration

The app uses the Google Generative AI SDK to communicate with Gemini. All API calls are made through the `/api/chat` endpoint which:

1. Receives user message and conversation history
2. Sends request to Gemini API
3. Calculates token usage and costs
4. Returns response with statistics

## Browser Storage

All chat sessions are stored in browser localStorage under the key `gemini_chat_sessions`. This means:
- Chats persist across browser sessions
- Clearing browser data will delete all chats
- Each browser/device has separate chat history

## Troubleshooting

### "Setup Required" message
- Ensure your API key is set in `.env.local`
- Restart the development server after adding the key

### API errors
- Verify your Gemini API key is valid
- Check that you have API quota remaining
- Ensure your internet connection is working

### Chats not saving
- Check if localStorage is enabled in your browser
- Try clearing browser cache and reloading

## Future Enhancements

- User authentication and cloud sync
- Conversation search and filtering
- Custom system prompts
- Model selection (different Gemini versions)
- Dark mode toggle
- Message editing and regeneration
- Conversation sharing

## License

MIT
