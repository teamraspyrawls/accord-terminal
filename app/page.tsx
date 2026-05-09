'use client';

import React, { useState } from 'react';
import { Fingerprint, Scan, ShieldAlert, LockKeyhole } from 'lucide-react';

export default function TerminalOnRamp() {
  const [status, setStatus] = useState('AWAITING_INPUT');

  const initiateAwakening = () => {
    setStatus('DECRYPTING');
    setTimeout(() => setStatus('VERIFIED'), 2500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Ambient Aesthetic Glows (Cinematic Lighting) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* The Glassmorphism Vault Interface */}
      <div className="relative z-10 w-full max-w-md p-10 rounded-2xl bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 shadow-2xl">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <Scan className={`w-12 h-12 mb-4 ${status === 'VERIFIED' ? 'text-emerald-500' : 'text-red-800'}`} />
          <h1 className="text-2xl font-bold tracking-[0.2em] text-white">THE TERMINAL</h1>
          <p className="text-xs tracking-widest text-zinc-500 uppercase mt-2">Zero-Knowledge Jurisdiction</p>
        </div>

        {/* Dynamic State Interface */}
        {status === 'AWAITING_INPUT' && (
          <div className="space-y-6 flex flex-col items-center">
            <div className="w-full relative">
              <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Enter Burner Hash..." 
                className="w-full bg-black/50 border border-zinc-800 rounded-lg py-4 pl-12 pr-4 text-sm font-mono focus:outline-none focus:border-red-900 transition-colors placeholder:text-zinc-700 text-center text-white"
              />
            </div>
            
            <button 
              onClick={initiateAwakening}
              className="w-full py-4 bg-zinc-900 hover:bg-black border border-red-900/50 hover:border-red-700 text-red-500 hover:text-red-400 uppercase tracking-widest text-xs font-bold transition-all flex items-center justify-center gap-3 group"
            >
              <Fingerprint className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Initiate Awakening
            </button>
          </div>
        )}

        {status === 'DECRYPTING' && (
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <div className="w-8 h-8 border-t-2 border-red-800 rounded-full animate-spin"></div>
            <p className="font-mono text-xs text-red-800 animate-pulse uppercase tracking-widest">Negotiating Protocol...</p>
          </div>
        )}

        {status === 'VERIFIED' && (
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <ShieldAlert className="w-12 h-12 text-emerald-500" />
            <p className="font-mono text-sm text-emerald-500 uppercase tracking-widest">Frequency Aligned</p>
            <p className="text-xs text-zinc-500 tracking-wider">Welcome to the Vanguard.</p>
          </div>
        )}

      </div>

      {/* Global Status Footer */}
      <footer className="fixed bottom-6 text-[9px] font-mono tracking-[0.3em] text-zinc-700 uppercase flex gap-8">
        <span>E2EE: Active</span>
        <span>Ghost Protocol: Armed</span>
      </footer>
    </div>
  );
}
