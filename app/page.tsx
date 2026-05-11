'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, Fingerprint, Crown, MapPin, Globe, CheckCircle2, Lock, Zap,
  Handshake, FileText, ChevronRight, Ticket, Users, MessageSquare, 
  Send, ShieldAlert, QrCode, ArrowUpRight, UserCircle2, Settings2, Plus, 
  PenSquare, ClipboardCheck, AlertTriangle, Star, Activity, Binary, 
  ShieldQuestion, Radar, Crosshair, BookOpen, Flame, EyeOff, UserCheck,
  Play, Share2, Layers, X, Info, Waves
} from 'lucide-react';

export default function AccordVanguardSanctuary() {
  const [activeTab, setActiveTab] = useState('ledger');
  const [matrixInitialized, setMatrixInitialized] = useState(false);
  const [initStep, setInitStep] = useState(1);
  const [vowAccepted, setVowAccepted] = useState(false);
  const [showNegotiator, setShowNegotiator] = useState(false);
  const [protocolSigned, setProtocolSigned] = useState(false);

  return (
    <div className="min-h-screen bg-[#020303] text-slate-300 font-sans selection:bg-teal-500/30 relative overflow-x-hidden">
      
      {/* --- SICK SENSUAL BACKGROUND: THE FREQUENCY --- */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#020303] flex items-center justify-center">
        {/* Deep Central Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent opacity-80" />
        
        {/* Animated Sine Wave (The Frequency) - Centered */}
        <svg className="w-[200vw] h-[50vh] opacity-30 mix-blend-screen absolute" 
             style={{ animation: 'drift 20s linear infinite' }} 
             viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,200 L0,200 Z" 
            fill="none" 
            stroke="url(#waveGlow)" 
            strokeWidth="2" 
            className="drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          />
          <path 
            d="M0,100 C200,0 300,200 500,100 C700,0 800,200 1000,100" 
            fill="none" 
            stroke="url(#waveGlow)" 
            strokeWidth="1" 
            className="drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            style={{ transform: 'translateY(10px)', opacity: 0.5 }}
          />
        </svg>

        {/* Tactical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drift { 0% { transform: translate(-50%, -50%) translateX(0); } 100% { transform: translate(-50%, -50%) translateX(-250px); } }
      `}} />

      {/* --- INITIALIZATION (ONBOARDING) --- */}
      {!matrixInitialized && (
        <div className="fixed inset-0 w-screen h-screen z-[500] bg-black/80 flex flex-col items-center justify-center p-6 backdrop-blur-2xl">
          <div className="max-w-xl w-full mx-auto bg-[#050707]/80 backdrop-blur-3xl border border-teal-500/20 rounded-[3rem] p-12 shadow-[0_0_150px_rgba(16,185,129,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[100px] -mr-32 -mt-32" />
            
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
               <div className="space-y-2">
                  <div className="flex items-center gap-2 text-teal-400 mb-4"><Binary size={20} /><span className="text-[10px] font-black tracking-[0.4em] uppercase">Vanguard Access</span></div>
                  <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">The Sanctuary</h2>
                  <div className="p-4 bg-teal-500/5 border border-teal-500/20 rounded-2xl text-[11px] leading-relaxed italic text-slate-400">
                    "Slip away from the public eye. Establish your Sovereign Pseudonym and enter a private jurisdiction."
                  </div>
               </div>

               {initStep === 1 ? (
                 <div className="space-y-6">
                    <div>
                      <input className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-teal-500 font-mono text-sm backdrop-blur-md" placeholder="e.g. Onyx_Principal" />
                    </div>
                    <button onClick={() => setInitStep(2)} className="w-full py-5 bg-teal-500 text-black font-black text-xs uppercase tracking-[0.4em] rounded-full hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(20,184,166,0.3)]">Establish Pseudonym</button>
                 </div>
               ) : (
                 <div className="space-y-6">
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] ml-2">Baseline Frequency Required</p>
                    <div className="space-y-3">
                       {['Consent is Active, Not Passive', 'Privacy is a Technical Requirement', 'Behavior Impacts Status'].map(v => (
                         <div key={v} className="p-4 bg-black/50 backdrop-blur-md border border-white/5 rounded-xl flex items-center gap-3 text-[11px] font-bold italic"><CheckCircle2 size={14} className="text-teal-500"/> {v}</div>
                       ))}
                    </div>
                    <button onClick={() => setMatrixInitialized(true)} className="w-full py-5 bg-teal-500 text-black font-black text-xs uppercase tracking-[0.4em] rounded-full hover:scale-[1.02] shadow-[0_0_30px_rgba(20,184,166,0.3)]">Step Inside</button>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}

      {/* --- GLOBAL NAVIGATION --- */}
      <nav className="h-20 border-b border-white/5 bg-[#020303]/60 backdrop-blur-2xl sticky top-0 z-50 px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-700 rounded shadow-[0_0_15px_rgba(20,184,166,0.3)] flex items-center justify-center text-black font-black"><ShieldCheck size={20} /></div>
          <span className="font-black tracking-[0.2em] text-white text-lg uppercase italic underline decoration-teal-500/50 underline-offset-8">Accord</span>
        </div>
        <div className="flex items-center gap-10 text-[10px] font-black tracking-[0.3em] uppercase">
          <button onClick={() => setActiveTab('ledger')} className={`${activeTab === 'ledger' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-500 hover:text-white'} pb-7 mt-7 transition-all`}>Ledger</button>
          <button onClick={() => setActiveTab('backstage')} className={`${activeTab === 'backstage' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-500 hover:text-white'} pb-7 mt-7 transition-all`}>Backstage</button>
          <button onClick={() => setActiveTab('vault')} className={`${activeTab === 'vault' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-500 hover:text-white'} pb-7 mt-7 transition-all`}>Vault</button>
        </div>
        <div className="h-10 w-10 rounded-full border border-white/10 bg-black/80 flex items-center justify-center text-[10px] font-black text-teal-400 shadow-inner backdrop-blur-md">OP</div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-8">
        
        {/* --- VIEW: THE LEDGER (WITH GLASSMORPHISM) --- */}
        {activeTab === 'ledger' && (
          <div className="space-y-12 animate-in fade-in duration-700">
             <header className="max-w-2xl bg-black/20 p-6 rounded-3xl backdrop-blur-md border border-white/5">
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">The Ledger</h2>
                <p className="text-sm text-slate-400 font-medium italic mt-2 leading-relaxed">
                  "The noise ends here. Monitor **The Frequency** to stay aligned and use the Tactical View to scout the perimeter. Precision coordinates are a privilege of the vetted; no pass, no entry."
                </p>
             </header>

             <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-8">
                   <div className="bg-[#050707]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-between group hover:border-teal-500/30 transition-all shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                         <h4 className="text-2xl font-black text-white tracking-tight uppercase italic">Equinox Gala</h4>
                         <p className="text-[10px] text-teal-400/70 uppercase font-mono tracking-widest mt-1 flex items-center gap-2"><Waves size={12}/> Signal Active // SEC_04</p>
                      </div>
                      <button onClick={() => setActiveTab('vault')} className="relative z-10 bg-teal-500 text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(20,184,166,0.2)]">Decrypt</button>
                   </div>
                </div>

                <aside className="w-full lg:w-80 space-y-6">
                   <div className="h-48 bg-[#050707]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] relative flex items-center justify-center overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#06b6d4_0%,_transparent_70%)]" />
                      <Radar className="text-teal-900/50" size={60} />
                      <Lock className="absolute text-slate-700/50" size={100} />
                      <div className="absolute bottom-4 text-[8px] font-mono text-teal-500/50 uppercase tracking-widest">Coordinates Encrypted</div>
                   </div>
                </aside>
             </div>
          </div>
        )}

        {/* --- VIEW: BACKSTAGE (NEGOTIATOR) --- */}
        {activeTab === 'backstage' && (
          <div className="space-y-10 animate-in slide-in-from-right-8 duration-700">
             <header className="max-w-2xl bg-black/20 p-6 rounded-3xl backdrop-blur-md border border-white/5">
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">Backstage</h2>
                <p className="text-sm text-slate-400 font-medium italic mt-2 leading-relaxed">
                  "Every syllable here is just setting the stage. Step into the Protocol Negotiator to map out the playground. Until we lock in a mutual agreement, we’re keeping things strictly on the surface."
                </p>
             </header>

             <div className="grid md:grid-cols-4 h-[600px] border border-white/10 rounded-[2.5rem] overflow-hidden bg-[#050707]/60 backdrop-blur-2xl relative shadow-2xl">
                <div className="bg-black/40 p-8 border-r border-white/5 flex flex-col justify-center items-center text-center space-y-4">
                   <Activity size={32} className="text-teal-500/20 animate-pulse" />
                   <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Awaiting Signal</p>
                </div>
                <div className="md:col-span-3 flex flex-col items-center justify-center p-12 text-center space-y-6 relative">
                   <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center text-teal-400 shadow-[0_0_30px_rgba(20,184,166,0.1)]"><MessageSquare size={24}/></div>
                   <h3 className="text-xl font-black text-white uppercase italic">Initiate Resonance</h3>
                   <button onClick={() => setShowNegotiator(true)} className="px-10 py-4 bg-teal-500 text-black font-black text-xs uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]">Open Negotiator</button>
                </div>

                {/* SLIDE-OVER PROTOCOL LIBRARY */}
                {showNegotiator && (
                   <div className="absolute inset-y-0 right-0 w-full md:w-[45%] bg-[#020303]/95 backdrop-blur-3xl border-l border-teal-500/20 p-10 animate-in slide-in-from-right-full duration-500 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
                      <div className="flex justify-between mb-8"><h3 className="text-sm font-black text-white uppercase tracking-[0.3em] flex items-center gap-2"><Handshake size={16} className="text-teal-400"/> The Library</h3><button onClick={() => setShowNegotiator(false)} className="text-slate-500 hover:text-white"><X size={20}/></button></div>
                      
                      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                         {[
                           { name: 'The Baseline', desc: 'Verbal check-ins. Zero cameras. Pseudonyms locked.' },
                           { name: 'The Deep End', desc: 'Hard limits locked. Safewords active. After-care guaranteed.' },
                           { name: 'The Unspoken', desc: 'All energy. Non-verbal cues only. Eye contact as consent.' }
                         ].map(r => (
                           <div key={r.name} className="p-5 bg-black/50 border border-white/5 rounded-2xl flex justify-between items-center group cursor-pointer hover:border-teal-500/40 transition-all backdrop-blur-md">
                              <div><p className="text-xs font-black text-white uppercase italic tracking-tighter">{r.name}</p><p className="text-[9px] text-teal-500/70 italic mt-1">{r.desc}</p></div>
                              <input type="checkbox" className="accent-teal-500 h-4 w-4" />
                           </div>
                         ))}
                      </div>
                      <button onClick={() => { setProtocolSigned(true); setShowNegotiator(false); }} className="w-full py-5 bg-teal-500 text-black font-black text-xs uppercase tracking-[0.4em] rounded-full mt-10 shadow-[0_0_30px_rgba(20,184,166,0.3)]">Lock & Sign Protocol</button>
                   </div>
                )}
             </div>
          </div>
        )}

        {/* --- VIEW: VAULT (STANDING & VOW) --- */}
        {activeTab === 'vault' && (
          <div className="space-y-12 animate-in zoom-in-95 duration-700">
             
             <section className="grid md:grid-cols-2 gap-8">
                {/* Standing/Frequency Card */}
                <div className="bg-[#050707]/60 backdrop-blur-2xl border border-teal-500/20 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-[0_0_50px_rgba(20,184,166,0.05)]">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px]" />
                   <div className="flex items-center gap-2 mb-4 text-teal-400 relative z-10"><Waves size={16}/><span className="text-[9px] font-black uppercase tracking-[0.2em]">Standing & Access</span></div>
                   <div className="flex items-end gap-3 relative z-10">
                      <span className="text-5xl font-black text-white tracking-tighter italic">98.4</span>
                      <div className="mb-2"><p className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Rank</p><p className="text-teal-400 font-black uppercase text-xs">The Vanguard</p></div>
                   </div>
                   <p className="text-[10px] text-slate-400 mt-6 leading-relaxed italic relative z-10">"Your signal is clear. You are cleared for The Deep End protocols and Vanguard-level coordinates."</p>
                </div>
                
                {/* Tea w/ Me Card */}
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 space-y-6 flex flex-col justify-center">
                   <div className="flex items-center gap-2 text-slate-500"><ClipboardCheck size={16}/><span className="text-[9px] font-black uppercase tracking-[0.2em]">Post-Assembly Feedback</span></div>
                   <h4 className="text-xl font-black text-white tracking-tighter uppercase italic">Tea w/ Me</h4>
                   <p className="text-[11px] text-slate-400 leading-relaxed italic">"Time to pour. Verify your resonance partner's adherence to the playground rules to secure your standing for the next cycle."</p>
                </div>
             </section>

             <section className="bg-[#050707]/60 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center text-center space-y-8 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/10 pointer-events-none" />
                {!vowAccepted ? (
                  <div className="space-y-8 relative z-10">
                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">The Final Accord</h3>
                    <div className="max-w-md space-y-4 text-left mx-auto bg-black/50 p-8 rounded-3xl border border-white/5 backdrop-blur-md">
                       <p className="text-xs text-slate-300 italic"><strong className="text-teal-400 uppercase font-black text-[10px] tracking-widest block mb-1">Privacy First</strong> No cameras. No names dropped. Total discretion.</p>
                       <p className="text-xs text-slate-300 italic"><strong className="text-teal-400 uppercase font-black text-[10px] tracking-widest block mb-1">Consent Always</strong> We don't guess; we ask. Respect the 'no', wait for the 'yes'.</p>
                       <p className="text-xs text-slate-300 italic"><strong className="text-teal-400 uppercase font-black text-[10px] tracking-widest block mb-1">Stay in Bounds</strong> Honor the space and the people hosting it.</p>
                    </div>
                    <button onClick={() => setVowAccepted(true)} className="px-16 py-5 border border-teal-500 text-teal-400 font-black text-xs uppercase tracking-[0.4em] rounded-full hover:bg-teal-500 hover:text-black transition-all shadow-[0_0_30px_rgba(20,184,166,0.15)] bg-teal-500/5">I'm In.</button>
                  </div>
                ) : (
                  <div className="max-w-md w-full p-12 bg-black/80 backdrop-blur-3xl border border-teal-500/30 rounded-[3rem] shadow-[0_0_100px_rgba(20,184,166,0.15)] relative overflow-hidden z-10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-500" />
                    <div className="flex justify-center mb-8"><div className="p-6 bg-white rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.2)]"><QrCode size={160} className="text-black" /></div></div>
                    <p className="text-[10px] text-teal-400 font-mono tracking-widest italic uppercase drop-shadow-[0_0_5px_rgba(20,184,166,0.5)]">Pass Active // SEC_04_GA</p>
                  </div>
                )}
             </section>
          </div>
        )}

      </main>
    </div>
  );
}
