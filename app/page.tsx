'use client';

import React, { useState } from 'react';

export default function TerminalHome() {
  // This is the App's memory. It starts in the 'LOCKED' state.
  const [systemState, setSystemState] = useState('LOCKED');

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'monospace'
    }}>
      
      {/* The Frosted Glass Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        padding: '40px',
        borderRadius: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        
        {/* The Cyan/Emerald Tactical Glow */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          backgroundColor: systemState === 'LOCKED' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(16, 185, 129, 0.2)', // Glow turns green when unlocked
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
          transition: 'background-color 0.5s ease'
        }}></div>

        {/* CONDITION 1: WHAT TO SHOW WHEN LOCKED */}
        {systemState === 'LOCKED' && (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h1 style={{ 
              color: 'white', fontSize: '28px', fontWeight: '900', letterSpacing: '4px', margin: '0 0 10px 0'
            }}>
              ACCORD
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '12px', margin: '0 0 40px 0' }}>
              STATUS: ENCRYPTED // AWAITING ANCHOR
            </p>

            <button 
              onClick={() => setSystemState('UNLOCKED')} // This line changes the state when clicked!
              style={{
                width: '100%', padding: '16px', backgroundColor: 'transparent',
                border: '1px solid rgba(6, 182, 212, 0.5)', borderRadius: '12px',
                color: '#2dd4bf', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer'
              }}
            >
              [ INITIATE PROTOCOL ]
            </button>
          </div>
        )}

        {/* CONDITION 2: WHAT TO SHOW WHEN UNLOCKED */}
        {systemState === 'UNLOCKED' && (
          <div style={{ position: 'relative', zIndex: 10 }}>
             <h1 style={{ 
              color: '#10b981', fontSize: '24px', fontWeight: '900', letterSpacing: '2px', margin: '0 0 10px 0'
            }}>
              ACCESS GRANTED
            </h1>
            <p style={{ color: '#e2e8f0', fontSize: '14px', margin: '0 0 40px 0' }}>
              Welcome to the Vanguard, Sovereign. The vault is open.
            </p>

            <button 
              onClick={() => setSystemState('LOCKED')} // This line locks it back up
              style={{
                width: '100%', padding: '16px', backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.5)', borderRadius: '12px',
                color: '#ef4444', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer'
              }}
            >
              [ SEVER CONNECTION ]
            </button>
          </div>
        )}

      </div>
    </div>
  );
}