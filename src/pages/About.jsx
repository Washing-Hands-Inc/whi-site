import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <div className="theme-90s" style={{ minHeight: '100vh', padding: '6rem 2rem 2rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="crt-scanlines"></div>
      
      <main className="brutalist-container" style={{ maxWidth: '600px', border: '1px solid #fff', padding: '2rem' }}>
        
        <NavLink to="/flint" className="brutalist-link" style={{ display: 'inline-block', marginBottom: '2rem' }}>{'<< Return'}</NavLink>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ width: '150px', height: '150px', border: '2px solid #fff', overflow: 'hidden', flexShrink: 0 }}>
            {/* The user's Daredevil image */}
            <img src="/daredevil.png" alt="cirfis" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)' }} />
          </div>
          
          <div className="brutalist-content" style={{ margin: 0 }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Luke Bauer</h1>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#aaa', lineHeight: 1.8 }}>
              <li>Alias: cirfis</li>
              <li>Age: 41</li>
              <li>Title: Founder</li>
              <li>Comms: <a href="mailto:the@washinghandsinc.com" className="brutalist-link" style={{textTransform: 'none'}}>the@washinghandsinc.com</a></li>
            </ul>
          </div>
        </div>

      </main>
    </div>
  );
}
