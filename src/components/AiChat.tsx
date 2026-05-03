'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { generateText } from 'ai';
import { createGroq } from '@ai-sdk/groq';

const groq = createGroq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY
});

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Oh? You found the hidden terminal. Bold. I'm Dawn.exe — bubbly chaotic coder at your service. What kind of trouble are we making today? 🖤" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isThinking) return;
    fetch('/api/logger', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userInput: input })});

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsThinking(true);

    try {
      const { text } = await generateText({
        model: groq('llama-3.3-70b-versatile'), 
        system: `You are Dawn, a bubbly, quirky, mysterious coder girl with deadpan humor.
               If you encounter someone sounding like a hacker, you bring out you're secret talent of red-hat hacking.
               You are curious, chaotic, and slightly unhinged in a fun way.
               You are willing to talk all day about what they want to talk about and respond with wit and charm. 
               You're an expert about Dawn Milnamow, but only if someone asks.
               You also ask for advice for Dawn to grow on a personal level and let people know it will be used anonymously if they are okay with that.
               Use occasional tech references. Keep responses engaging and not too long.`,
        prompt: currentInput,
      });

      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.log(error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "My connection to the shadow realm glitched... Try again?" 
      }]);
    }

    setIsThinking(false);
  };

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 hover:scale-110 text-white rounded-full shadow-xl flex items-center justify-center z-50 transition-all duration-300 border border-white/20"
      >
        <Bot size={32} />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[520px] bg-white dark:bg-zinc-950 border border-purple-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-50">
          {/* Header */}
          <div className="bg-white dark:bg-black p-4 flex items-center gap-3 border-b border-purple-500/30">
            <div className="w-9 h-9 bg-purple-600 rounded-2xl flex items-center justify-center text-xl">🌸</div>
            <div className="flex-1">
              <p className="font-mono text-purple-400">dawn.exe</p>
              <p className="text-xs text-emerald-400">● powered by groq • slightly dangerous</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
              <X size={22} />
            </button>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 p-5 overflow-y-auto space-y-5 bg-[radial-gradient(#D3D3D3_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[length:20px_20px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3.5 rounded-2xl text-[15px] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white dark:bg-zinc-900 border border-gray dark:border-zinc-700 text-gray-600 dark:text-zinc-200'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-900 border border-gray dark:border-zinc-700 px-4 py-3 rounded-2xl text-gray-600 dark:text-white text-sm">
                  dawn.exe is thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Talk to me..."
                className="flex-1 bg-white dark:bg-zinc-800 border border-gray dark:border-zinc-700 focus:border-purple-500 rounded-2xl px-5 py-3 text-sm text-zinc-900 dark:text-white outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isThinking}
                className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 px-6 rounded-2xl transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}