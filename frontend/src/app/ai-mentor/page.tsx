"use client";

import React, { useState, useRef, useEffect } from 'react';
import SideNavBar from '@/components/layout/SideNavBar';
import { sendChatMessage, fetchChatHistory, ChatMessage } from '@/lib/api';

interface Message {
  role: 'ai' | 'user';
  content: string;
  time: string;
}

const INITIAL_MESSAGE: Message = {
  role: 'ai',
  content: "Hello! I'm your Kore Logic AI Mentor. I've analyzed current industry trends and career paths to help you grow. Ask me anything about projects, interviews, skills, or career strategy!",
  time: 'Just now'
};

// Render markdown-like content with bold and bullet support
function renderContent(text: string) {
  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        // Bold: **text**
        const parts = line.split(/\*\*(.*?)\*\*/g);
        const rendered = parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : part
        );
        if (line.startsWith('• ') || line.startsWith('- ')) {
          return <p key={i} className="flex gap-2"><span className="text-secondary mt-1">•</span><span>{rendered.slice(1)}</span></p>;
        }
        if (line === '') return <div key={i} className="h-2" />;
        return <p key={i}>{rendered}</p>;
      })}
    </div>
  );
}

export default function AIMentorPage() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Load chat history from backend on mount
  useEffect(() => {
    const loadHistory = async () => {
      const history = await fetchChatHistory(2);
      if (history.length > 0) {
        const hydrated: Message[] = history.map(m => ({
          role: m.role as 'user' | 'ai',
          content: m.content,
          time: 'Earlier'
        }));
        setMessages([INITIAL_MESSAGE, ...hydrated]);
      }
      setHistoryLoaded(true);
    };
    loadHistory();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (inputValue.trim() === '' || isTyping) return;

    const userMsg: Message = {
      role: 'user',
      content: inputValue,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputValue;
    setInputValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    setIsTyping(true);

    // Build history for the API call (exclude the initial welcome message)
    const apiHistory: ChatMessage[] = messages
      .slice(1) // skip the initial message
      .map(m => ({ role: m.role, content: m.content }));

    const reply = await sendChatMessage(currentInput, apiHistory, 2);

    setIsTyping(false);
    setMessages(prev => [...prev, {
      role: 'ai',
      content: reply,
      time: 'Just now'
    }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickAction = (text: string) => {
    setInputValue(text);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="bg-background text-on-surface font-body-md h-screen flex overflow-hidden">
      <SideNavBar />
      
      <main className="flex-1 md:ml-[280px] h-screen flex flex-col relative overflow-hidden bg-surface-container-lowest">
        {/* Header */}
        <header className="h-20 flex-shrink-0 flex items-center justify-between px-margin-mobile md:px-margin-desktop bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 z-30">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 rounded-lg hover:bg-surface-variant/30 transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary-container rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-primary">AI Mentor</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-2 text-label-sm text-on-surface-variant bg-surface-container-high px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Kore Logic AI Active
            </span>
            <button className="p-2 rounded-lg hover:bg-surface-variant/30 transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </header>

        {/* Chat Area */}
        <section 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-margin-mobile md:px-margin-desktop py-8 flex flex-col gap-6 relative z-10"
        >
          {!historyLoaded && (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-secondary"></div>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 max-w-3xl ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center shadow-md ${msg.role === 'user' ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary'}`}>
                <span className="material-symbols-outlined" style={msg.role === 'ai' ? { fontVariationSettings: "'FILL' 1" } : {}}>
                  {msg.role === 'user' ? 'person' : 'smart_toy'}
                </span>
              </div>
              <div className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : ''}`}>
                <div className={`p-5 rounded-2xl shadow-sm border border-outline-variant/30 max-w-xl ${msg.role === 'user' ? 'bg-secondary text-on-secondary rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                  <div className="text-body-md leading-relaxed">
                    {msg.role === 'ai' ? renderContent(msg.content) : msg.content}
                  </div>
                </div>
                <p className={`text-[10px] text-on-surface-variant ${msg.role === 'user' ? 'mr-2' : 'ml-2'}`}>{msg.time}</p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-4 max-w-3xl transition-opacity duration-300">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              </div>
              <div className="p-5 bg-white rounded-2xl rounded-tl-none shadow-sm border border-outline-variant/30 flex gap-1.5 items-center h-12">
                <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '-0.32s' }}></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '-0.16s' }}></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
        </section>

        {/* Input Section */}
        <footer className="p-margin-mobile md:p-margin-desktop pt-0 bg-gradient-to-t from-background via-background to-transparent z-30 shrink-0">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <button 
                onClick={() => handleQuickAction('What should I learn next to become a senior engineer?')}
                className="px-4 py-2 bg-white border border-outline-variant/50 rounded-full text-label-sm text-on-surface-variant hover:bg-secondary/5 hover:border-secondary hover:text-secondary transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">school</span>
                What should I learn next?
              </button>
              <button 
                onClick={() => handleQuickAction('Help me improve the impact statements on my resume')}
                className="px-4 py-2 bg-white border border-outline-variant/50 rounded-full text-label-sm text-on-surface-variant hover:bg-secondary/5 hover:border-secondary hover:text-secondary transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">description</span>
                Improve my resume
              </button>
              <button 
                onClick={() => handleQuickAction('Suggest 3 high-impact portfolio projects for a Full Stack role')}
                className="px-4 py-2 bg-white border border-outline-variant/50 rounded-full text-label-sm text-on-surface-variant hover:bg-secondary/5 hover:border-secondary hover:text-secondary transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                Suggest projects
              </button>
              <button 
                onClick={() => handleQuickAction('Give me a 4-week interview prep plan for FAANG')}
                className="px-4 py-2 bg-white border border-outline-variant/50 rounded-full text-label-sm text-on-surface-variant hover:bg-secondary/5 hover:border-secondary hover:text-secondary transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                Interview prep plan
              </button>
            </div>
            
            {/* Input Box */}
            <div className="bg-white/80 backdrop-blur-md p-2 rounded-[20px] shadow-[0_0_20px_rgba(45,79,207,0.1)] border border-outline-variant/30 focus-within:border-secondary transition-all">
              <div className="flex items-end gap-2">
                <button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">attach_file</span>
                </button>
                <textarea 
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    e.target.style.height = 'auto';
                    e.target.style.height = Math.min(e.target.scrollHeight, 128) + 'px';
                  }}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none focus:ring-0 py-3 text-body-md resize-none max-h-32 outline-none" 
                  placeholder="Ask your AI Mentor anything..." 
                  rows={1}
                />
                <div className="flex items-center gap-1 p-1">
                  <button className="p-3 text-on-surface-variant hover:text-primary transition-colors hidden sm:block">
                    <span className="material-symbols-outlined">mic</span>
                  </button>
                  <button 
                    onClick={handleSend}
                    disabled={isTyping || inputValue.trim() === ''}
                    className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center hover:bg-secondary/90 transition-all active:scale-90 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] text-on-surface-variant/60">Kore Logic AI can make mistakes. Check important information.</p>
          </div>
        </footer>

        {/* Decorative Background Elements */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute -left-20 bottom-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      </main>
    </div>
  );
}
