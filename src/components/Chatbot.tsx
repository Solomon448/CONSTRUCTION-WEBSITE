import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Calendar, Sparkles, Building2, ShieldCheck, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  action?: 'book' | 'inclusions' | 'portfolio' | 'call' | 'email';
}

interface ChatbotProps {
  onOpenContact: () => void;
  onOpenInclusions: () => void;
  onOpenHouseDesign: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({
  onOpenContact,
  onOpenInclusions,
  onOpenHouseDesign,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const phoneNum = '+61 3 9820 4000';
  const emailAddr = 'enquiries@realestateroyal.com.au';
  
  const initialMessages: ChatMessage[] = [
    {
      id: 'm-1',
      sender: 'bot',
      text: `Welcome to RealestateRoyal 24/7 Concierge. How may I assist with your architectural build, custom inclusions, or video consultation today? You can also reach our studio directly at ${phoneNum} or ${emailAddr}.`,
      time: 'Just now',
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'What is your direct phone & email?',
    'How do I book a Google Meet / Zoom consult?',
    'What is the typical construction timeline?',
    'Can I customize the luxury inclusions?',
    'Where are your recent project builds located?',
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (userMessageText: string) => {
    if (!userMessageText.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: userMessageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let botAnswer = '';
      let actionType: 'book' | 'inclusions' | 'portfolio' | 'call' | 'email' | undefined = undefined;

      const query = userMessageText.toLowerCase();

      if (query.includes('phone') || query.includes('email') || query.includes('number') || query.includes('contact') || query.includes('call') || query.includes('reach') || query.includes('address') || query.includes('speak')) {
        botAnswer = `You can reach our principal architectural studio directly via:\n\n• Phone: ${phoneNum}\n• Email: ${emailAddr}\n• Studio Headquarters: Level 18, 120 Collins Street, Melbourne VIC 3000\n• Office Hours: Mon - Fri (8:30am – 6:00pm EST)\n\nWould you like to call or send us an email now?`;
        actionType = 'call';
      } else if (query.includes('book') || query.includes('google meet') || query.includes('zoom') || query.includes('calendly') || query.includes('quote') || query.includes('consult')) {
        botAnswer = `You can book a 1-on-1 virtual architectural consultation via Google Meet, Zoom, or Calendly directly through our studio booking system. Or call us directly at ${phoneNum}.`;
        actionType = 'book';
      } else if (query.includes('timeline') || query.includes('time') || query.includes('duration') || query.includes('how long')) {
        botAnswer = 'Our custom architectural builds typically range from 8 to 14 months from foundation pour to key handover, depending on structural complexity and bespoke joinery requirements.';
        actionType = 'book';
      } else if (query.includes('inclusion') || query.includes('material') || query.includes('finish') || query.includes('custom') || query.includes('marble')) {
        botAnswer = 'RealestateRoyal offers curated luxury inclusion tiers including Calacatta marble counters, Gaggenau kitchen suites, engineered European oak flooring, and climate zoning. You can explore our full inclusions catalogue.';
        actionType = 'inclusions';
      } else if (query.includes('where') || query.includes('location') || query.includes('recent') || query.includes('portfolio') || query.includes('project')) {
        botAnswer = 'We construct luxury residences across Victoria and New South Wales (Toorak, Brighton, South Yarra, Byron Bay). You can view our curated recent work archive right on this page.';
        actionType = 'portfolio';
      } else if (query.includes('cost') || query.includes('price') || query.includes('budget') || query.includes('investment')) {
        botAnswer = 'Our architectural residence builds generally start from $1.0M to $5.0M+. We provide fixed-price contracts and itemized quantity survey guarantees prior to construction.';
        actionType = 'book';
      } else {
        botAnswer = `Thank you for reaching out to RealestateRoyal Studio. You can contact us directly at ${phoneNum} / ${emailAddr}, or schedule a virtual floorplan review with our principal architect.`;
        actionType = 'book';
      }

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: botAnswer,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: actionType,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center space-x-3 bg-[#050505] hover:bg-black text-white px-4 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 cursor-pointer border border-white/10"
            aria-label="Open 24/7 Architectural Chatbot"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white">
                <MessageSquare size={16} />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#050505]" />
            </div>
            <div className="text-left pr-1 hidden sm:block">
              <span className="block text-[11px] font-bold uppercase tracking-wider font-sans leading-tight">
                24/7 Concierge
              </span>
              <span className="block text-[10px] text-gray-400 font-sans leading-tight">
                +61 3 9820 4000 • Live Chat
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[395px] h-[540px] bg-white rounded-[18px] shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300 font-sans">
          
          {/* Header */}
          <div className="bg-[#050505] text-white p-4 flex flex-col border-b border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white border border-white/20">
                    <Bot size={18} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#050505]" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-white">
                      RealestateRoyal AI
                    </h3>
                    <span className="text-[9px] bg-emerald-950 text-emerald-400 font-bold px-1.5 py-0.5 rounded-[2px] border border-emerald-800/60 uppercase">
                      24/7 Live
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-sans">
                    Architectural & Construction Advisor
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Studio Business Contact Banner inside Chat Header */}
            <div className="bg-white/10 border border-white/15 rounded-[6px] px-3 py-2 flex items-center justify-between text-[11px] text-gray-200">
              <a 
                href={`tel:${phoneNum.replace(/\s+/g, '')}`} 
                className="flex items-center space-x-1.5 hover:text-white transition-colors"
                title="Call Studio Direct"
              >
                <Phone size={12} className="text-emerald-400 shrink-0" />
                <span className="font-bold">{phoneNum}</span>
              </a>
              <span className="text-gray-500">•</span>
              <a 
                href={`mailto:${emailAddr}`} 
                className="flex items-center space-x-1.5 hover:text-white transition-colors truncate max-w-[170px]"
                title="Email Studio Direct"
              >
                <Mail size={12} className="text-amber-400 shrink-0" />
                <span className="truncate">{emailAddr}</span>
              </a>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#fafaf8]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-[12px] text-[13px] sm:text-[14px] font-sans leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#050505] text-white rounded-br-2px shadow-xs'
                      : 'bg-white text-gray-800 border border-gray-200/80 rounded-bl-2px shadow-2xs'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Action Buttons inside Bot Message */}
                  {msg.action && (
                    <div className="mt-3 pt-2.5 border-t border-gray-100 flex flex-col gap-2">
                      {msg.action === 'call' && (
                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={`tel:${phoneNum.replace(/\s+/g, '')}`}
                            className="text-center text-xs font-bold uppercase tracking-wider py-2 px-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[4px] transition-colors flex items-center justify-center space-x-1 cursor-pointer shadow-2xs"
                          >
                            <Phone size={13} />
                            <span>Call Studio</span>
                          </a>
                          <a
                            href={`mailto:${emailAddr}`}
                            className="text-center text-xs font-bold uppercase tracking-wider py-2 px-2.5 bg-[#050505] hover:bg-black text-white rounded-[4px] transition-colors flex items-center justify-center space-x-1 cursor-pointer shadow-2xs"
                          >
                            <Mail size={13} />
                            <span>Send Email</span>
                          </a>
                        </div>
                      )}
                      {msg.action === 'book' && (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onOpenContact();
                          }}
                          className="w-full text-center text-xs font-bold uppercase tracking-wider py-2.5 px-3 bg-[#050505] text-white rounded-[4px] hover:bg-black transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-2xs font-sans"
                        >
                          <Calendar size={13} />
                          <span>Request Quote / Book Consult</span>
                        </button>
                      )}
                      {msg.action === 'inclusions' && (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onOpenInclusions();
                          }}
                          className="w-full text-center text-xs font-bold uppercase tracking-wider py-2.5 px-3 bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-[4px] transition-colors flex items-center justify-center space-x-1.5 cursor-pointer border border-gray-200 font-sans"
                        >
                          <Building2 size={13} />
                          <span>Explore Inclusion Catalogue</span>
                        </button>
                      )}
                      {msg.action === 'portfolio' && (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onOpenHouseDesign();
                          }}
                          className="w-full text-center text-xs font-bold uppercase tracking-wider py-2.5 px-3 bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-[4px] transition-colors flex items-center justify-center space-x-1.5 cursor-pointer border border-gray-200 font-sans"
                        >
                          <Sparkles size={13} />
                          <span>View Recent Design Concepts</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
                <span className="text-[9.5px] text-gray-400 font-sans mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 bg-white border border-gray-200 p-3 rounded-[12px] max-w-[120px]">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Carousel */}
          <div className="p-2 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-1.5">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="text-[11px] font-sans font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-full shrink-0 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-3 bg-white border-t border-gray-200 flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about phone, email, builds, or quotes..."
              className="flex-1 text-[13px] sm:text-[14px] font-sans px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-[6px] focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-[6px] bg-[#050505] text-white disabled:opacity-40 flex items-center justify-center transition-all cursor-pointer shrink-0"
            >
              <Send size={15} />
            </button>
          </form>

        </div>
      )}
    </>
  );
};

