import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Flint() {
  return (
    <div className="theme-90s" style={{ minHeight: '100vh', padding: '6rem 2rem 2rem 2rem' }}>
      <div className="crt-scanlines"></div>
      
      <main className="brutalist-container">
        <header className="brutalist-header">
          <h1 style={{ color: '#fff', textTransform: 'uppercase' }}>FLINT STRONG</h1>
          <p>Forensic Deconstruction of Systemic Collapse // 1989-2025</p>
        </header>

        <div className="brutalist-grid">
          <div className="brutalist-content">
            <div className="brutalist-card" style={{ border: '1px solid #fff', padding: '1.5rem', marginBottom: '2rem', background: 'rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem', background: '#fff', color: '#000', display: 'inline-block', padding: '0.1rem 0.4rem', fontWeight: 'bold' }}>LEGAL DISCOVERY: TORT.WASHINGHANDSINC.COM</h3>
              <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '1rem' }}>
                Ongoing forensic audit of the 7th Circuit Court and associated administrative failures. This is not a request for comment. It is a documentation of witness.
              </p>
              <a href="https://tort.washinghandsinc.com" target="_blank" rel="noopener noreferrer" className="brutalist-link" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                {'>> ACCESS EVIDENTIARY ARCHIVE'}
              </a>
            </div>

            <h2>The Illusion of the Hub</h2>
            <p>
              In the late 20th century, General Motors was the undisputed central hub of American industry. Flint, Michigan, was merely a node. When the central hub decided to optimize for capital efficiency over structural integrity, it severed the connections to its nodes. 
            </p>
            <p>
              The result was not merely an economic downturn; it was a total gestalt collapse. The infrastructure, the social fabric, and the psychological state of the city rapidly deteriorated. The "Flint Vehicle City" arches stood over torn-up brick roads—monuments to a systemic failure.
            </p>

            <h2>The Antidote</h2>
            <p>
              Washing Hands Inc. was founded on the brutal lessons of the Rust Belt. Entropy cannot be managed from a boardroom in Detroit. It must be managed locally, through persistent data logic and robust, autonomous hardware. 
            </p>
            <p>
              We bypass centralized dependencies. We build structural sanctuaries. If the empire falls, our nodes remain functional.
            </p>

            <div style={{ marginTop: '3rem', borderTop: '2px solid #fff', paddingTop: '1rem', display: 'flex', gap: '2rem' }}>
              <NavLink to="/flint/about" className="brutalist-link">{'>> Access Founder Profile'}</NavLink>
              <a href="https://tort.washinghandsinc.com" target="_blank" rel="noopener noreferrer" className="brutalist-link">{'>> Tort'}</a>
            </div>
          </div>

          <div className="brutalist-sidebar">
            <div className="image-frame" style={{ borderColor: '#fff' }}>
              <img src="/flint_90s.png" alt="Flint Vehicle City 1990s" style={{ width: '100%', display: 'block', filter: 'grayscale(100%) contrast(1.5)' }} />
              <div className="image-caption" style={{ color: '#fff' }}>Fig 1. Systemic decay. Flint, MI.</div>
            </div>
            
            <div className="brutalist-quote" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
              "THE ONLY WAY OUT IS THROUGH."
            </div>
            
            <div style={{ padding: '1rem', border: '1px dashed #444', marginTop: '2rem', fontSize: '0.8rem', color: '#666' }}>
              STATUS: DECENTRALIZED<br />
              NODES: ACTIVE<br />
              INTEGRITY: UNCOMPROMISED
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
