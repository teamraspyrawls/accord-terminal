import React from 'react';

export default function TerminalHome() {
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
        backgroundColor: 'rgba(255, 255, 255, 0.05)', // Transparent white
        backdropFilter: 'blur(20px)', // This creates the frosted glass effect!
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
          backgroundColor: 'rgba(6, 182, 212, 0.2)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0
        }}></div>

        {/* The Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h1 style={{ 
            color: 'white', 
            fontSize: '28px', 
            fontWeight: '900', 
            letterSpacing: '4px',
            textTransform: 'uppercase',
            margin: '0 0 10px 0'
          }}>
            ACCORD
          </h1>
          
          <p style={{ color: '#94a3b8', fontSize: '12px', margin: '0 0 40px 0' }}>
            STATUS: ENCRYPTED // AWAITING ANCHOR
          </p>

          <button style={{
            width: '100%',
            padding: '16px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(6, 182, 212, 0.5)',
            borderRadius: '12px',
            color: '#2dd4bf', // Teal text
            fontWeight: 'bold',
            letterSpacing: '2px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            [ INITIATE PROTOCOL ]
          </button>
        </div>
      </div>
      
    </div>
  );
}