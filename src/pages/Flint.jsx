import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Flint() {
  return (
    <div className="theme-90s" style={{ minHeight: '100vh', padding: '6rem 2rem 2rem 2rem' }}>
      <div className="crt-scanlines"></div>
      
      <main className="brutalist-container">
        <header className="brutalist-header">
          <h1>THE COLLAPSE OF FLINT</h1>
          <p>A Case Study in Centralized Failure // 1989-1999</p>
        </header>

        <div className="brutalist-grid">
          <div className="brutalist-content">
            <h2>The Illusion of the Hub</h2>
            <p>
              In the late 20th century, General Motors was the undisputed central hub of American industry. Flint, Michigan, was merely a node. When the central hub decided to optimize for capital efficiency over structural integrity, it severed the connections to its nodes. 
            </p>
            <p>
              The result was not merely an economic downturn; it was a total gestalt collapse. The infrastructure, the social fabric, and the psychological state of the city rapidly deteriorated. The "Flint Vehicle City" arches stood over torn-up brick roads—monuments to a systemic failure.
            </p>
            <p>
              Revitalization efforts failed because they attempted to rebuild the old top-down hierarchy. They built luxury hotels and tourist attractions while the manufacturing base rotted. They ignored the fundamental truth of entropy: a centralized system cannot save a failing node; it will only amputate it to save the core.
            </p>

            <h2>The Antidote</h2>
            <p>
              Washing Hands Inc. was founded on the brutal lessons of the Rust Belt. Entropy cannot be managed from a boardroom in Detroit. It must be managed locally, through persistent data logic and robust, autonomous hardware. 
            </p>
            <p>
              We bypass centralized dependencies. We build structural sanctuaries. If the empire falls, our nodes remain functional.
            </p>

            <div style={{ marginTop: '3rem', borderTop: '2px solid #fff', paddingTop: '1rem' }}>
              <NavLink to="/flint/about" className="brutalist-link">{'>> Access Founder Profile'}</NavLink>
            </div>
          </div>

          <div className="brutalist-sidebar">
            <div className="image-frame">
              <img src="/flint_90s.png" alt="Flint Vehicle City 1990s" style={{ width: '100%', display: 'block' }} />
              <div className="image-caption">Fig 1. Systemic decay. Torn infrastructure under the Vehicle City arch, circa 1990.</div>
            </div>
            
            <div className="brutalist-quote">
              "They amputate the nodes to save the core. We build nodes that don't need a core."
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
