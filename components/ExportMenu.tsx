'use client';

import { useState } from 'react';
import { ChatSession } from '@/lib/types';
import {
  exportChatAsJSON,
  exportChatAsMarkdown,
  exportChatAsCSV,
} from '@/lib/storage';

interface ExportMenuProps {
  session: ChatSession | null;
}

export default function ExportMenu({ session }: ExportMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleExport = (format: 'json' | 'markdown' | 'csv') => {
    if (!session) return;

    let content = '';
    let filename = `chat-${session.id}`;
    let mimeType = 'text/plain';

    switch (format) {
      case 'json':
        content = exportChatAsJSON(session);
        filename += '.json';
        mimeType = 'application/json';
        break;
      case 'markdown':
        content = exportChatAsMarkdown(session);
        filename += '.md';
        mimeType = 'text/markdown';
        break;
      case 'csv':
        content = exportChatAsCSV(session);
        filename += '.csv';
        mimeType = 'text/csv';
        break;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={!session}
        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
      >
        ⬇️
        Export
        ▼
      </button>

      {isOpen && session && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10">
          <button
            onClick={() => handleExport('json')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg"
          >
            Export as JSON
          </button>
          <button
            onClick={() => handleExport('markdown')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Export as Markdown
          </button>
          <button
            onClick={() => handleExport('csv')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 last:rounded-b-lg"
          >
            Export as CSV
          </button>
        </div>
      )}
    </div>
  );
}
