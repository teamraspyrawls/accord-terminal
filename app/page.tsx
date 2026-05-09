'use client';

import React, { useState } from 'react';
import { Fingerprint, LockKeyhole } from 'lucide-react';

export default function TerminalOnRamp() {
  const [isAwakening, setIsAwakening] = useState(false);
  const [status, setStatus] = useState('AWAITING_INPUT');

  const handleInitiate = () => {
    setStatus('DECRYPTING');
    setTimeout(() => setStatus('VERIFIED'), 2000);
  };

  return (
    <div className="min-h-screen bg-black font-sans relative overflow-hidden selection:bg-emerald-900 selection:text-emerald-400">
      
      {/* 
        The Hidden Navigation (Top Right)
        Text is incredibly dark (zinc-950) so it blends with the black background.
        It only reveals itself as emerald-500 when hovered.
      */}
      <nav className="absolute top-10 right-12 flex gap-10 font-mono text-[10px] tracking-[0.4em] uppercase z-50">
        <button className="text-zinc-950 hover:text-emerald-500 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-700 outline-none">
          Vanguard
        </button>
        <button className="text-zinc-950 hover:text-emerald-500 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-700 outline-none">
          Frequency
        </button>
        <button 
          onClick={() => setIsAwakening(true)}
          className="text-zinc-950 hover:text-emerald-500 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-700 outline-none"
        >
          Initiate
        </button>
      </nav>

      {/* 
        The Vault Interface (Only appears after clicking INITIATE)
      */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
          isAwakening ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-md p-10">
          
          {status === 'AWAITING_INPUT' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="w-full relative group">
                <LockKeyhole className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-800 w-4 h-4 group-focus-within:text-emerald-500 transition-colors duration-500" />
                <input 
                  type="text" 
                  placeholder="BURNER HASH" 
                  className="w-full bg-transparent border-b border-zinc-900 focus:border-emerald-500 py-4 pl-8 pr-4 text-xs tracking-[0.3em] font-mono focus:outline-none transition-colors placeholder:text-zinc-900 text-emerald-400"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              
              <button 
                onClick={handleInitiate}
                className="w-full py-4 text-zinc-700 hover:text-emerald-500 uppercase tracking-[0.4em] text-[10px] transition-all duration-500 flex items-center justify-center gap-4 group"
              >
                <Fingerprint className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Authenticate
              </button>
            </div>
          )}

          {status === 'DECRYPTING' && (
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-px h-12 bg-emerald-500/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-4 bg-emerald-500 animate-[bounce_1s_infinite]" />
              </div>
              <p className="font-mono text-[9px] text-emerald-500/50 uppercase tracking-[0.5em] animate-pulse">
                Decrypting Protocol
              </p>
            </div>
          )}

          {status === 'VERIFIED' && (
            <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-1000">
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)]" />
              <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-[0.5em]">
                Access Granted
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
