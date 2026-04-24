import React, { useState } from 'react';
import { Cpu, Network, Zap, Factory } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();
  const [clickCount, setClickCount] = useState(0);
  const [showCredo, setShowCredo] = useState(false);

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 2) {
      setShowCredo(true);
    }
  };

  return (
    <div className="theme-indigo">


      <div className="organic-bg">
        <svg style={{ display: 'none' }}>
          <defs>
            <filter id="organic-noise" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.05 0" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="mycelial-nodes parallax-layer-1"></div>
      <div className="mycelial-nodes parallax-layer-2"></div>

      <main className="container">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <div className="logo-glow-complex"></div>
            <img src="/whi_logo_notext.png" alt="Washing Hands Inc. Emblem" />
          </div>
          
          <div className="tagline reveal" style={{ opacity: 0, transition: 'opacity 1s ease 0.5s' }}>
            Keeping the future's hands clean.
          </div>
          
          <h1 className="title-display reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 1s ease 0.8s' }}>
            Systems Engineering<br />for the Human Environment
          </h1>
          
          <p className="reveal" style={{ maxWidth: '600px', margin: '2rem auto', opacity: 0, transition: 'all 1s ease 1.1s' }}>
            Providing specialized technical services focused on the preservation of structural and digital integrity.
          </p>

          <div className="reveal" style={{ opacity: 0, transition: 'all 1s ease 1.4s', marginTop: '2rem' }}>
            <button className="interactive-node">
              <Network size={16} /> Init Protocol
            </button>
          </div>
        </section>

        <div className="lichen-line"></div>

        {/* DIALECTIC SECTION */}
        <section className="section">
          <div className="grid-2">
            <div className="glass-panel reveal-left" style={{ opacity: 0, transform: 'translateX(-100px)', transition: 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
              <h2 className="accent-text">Thesis (Physical)</h2>
              <h3 style={{ fontSize: '2rem', color: '#fff' }}>Inevitable Entropy</h3>
              <p>
                The physical world tends toward structural collapse. Traditional engineering and corporate structures attempt to freeze material in time—a futile resistance that inevitably results in systemic amputation and decay when the center cannot hold.
              </p>
              <div className="interactive-node" style={{ marginTop: '1rem' }}>
                <Factory size={16} /> Failing Topologies
              </div>
            </div>
            
            <div className="glass-panel reveal-right" style={{ opacity: 0, transform: 'translateX(100px)', transition: 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s', borderColor: 'var(--color-drab-green)' }}>
              <h2 className="accent-text" style={{ color: 'var(--color-drab-light)' }}>Antithesis (Digital)</h2>
              <h3 style={{ fontSize: '2rem', color: '#fff' }}>Unanchored Persistence</h3>
              <p>
                The digital realm offers infinite persistence and perfect memory, but it lacks physical anchoring. Left alone, it drifts into pure abstraction, vulnerable to the same centralized chokepoints that cripple physical supply chains.
              </p>
              <div className="interactive-node" style={{ marginTop: '1rem', borderColor: 'var(--color-drab-light)', color: 'var(--color-drab-light)' }}>
                 <Cpu size={16} /> Digital Abstraction
              </div>
            </div>
          </div>

          <div className="glass-panel reveal" style={{ marginTop: '2rem', borderColor: 'var(--color-gold)', textAlign: 'center', opacity: 0, transition: 'all 1.2s ease' }}>
              <h2 className="accent-text" style={{ color: 'var(--color-gold)' }}>Synthesis</h2>
              <h3 style={{ fontSize: '2rem', color: '#fff' }}>Structural Sanctuary</h3>
              <p style={{ maxWidth: '800px', margin: '0 auto' }}>
                Washing Hands Inc. engineers the resilient bridge. We embed persistent, distributed data logic directly into autonomous local hardware. We do not attempt to freeze time; we manage the entropy, creating a symbiotic topology where the node survives long after the hub has failed.
              </p>
              <div className="interactive-node" style={{ marginTop: '1rem', borderColor: 'var(--color-gold)', color: 'var(--color-gold)', display: 'inline-flex' }}>
                 <Network size={16} /> The Hyphae Protocol
              </div>
          </div>
        </section>

        <div className="lichen-line"></div>

        {/* CAPABILITIES SECTION */}
        <section className="section">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem', opacity: 0, transform: 'scale(0.9)', transition: 'all 1s ease' }}>
            <h2 className="accent-text">Capabilities</h2>
            <h3 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>High-Bandwidth Living</h3>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              Utilizing local hardware and next-gen architectures, we specialize in local hardware optimization and persistent data logic to bypass centralized dependencies.
            </p>
          </div>

          <div className="grid-2">
            <div className="glass-panel reveal-left" style={{ opacity: 0, transform: 'translateY(50px) rotate(-2deg)', transition: 'all 1s ease' }}>
              <Zap size={32} color="var(--color-gold)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Hardware Optimization</h4>
              <p>
                Specializing in local hardware optimization to bypass centralized dependencies and create a structural sanctuary in a dying empire.
              </p>
            </div>
            
            <div className="glass-panel reveal-right" style={{ opacity: 0, transform: 'translateY(50px) rotate(2deg)', transition: 'all 1s ease 0.2s' }}>
              <Network size={32} color="var(--color-drab-green)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Persistent Data Logic</h4>
              <p>
                Applying robust, persistent data logic frameworks to ensure digital integrity remains intact regardless of external systemic decay.
              </p>
            </div>
          </div>
        </section>
        
        <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(116, 125, 94, 0.2)' }}>
          <img src="/whi_logo_notext.png" alt="WHI" style={{ width: '40px', opacity: 0.5, marginBottom: '1rem' }} />
          <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>© {new Date().getFullYear()} Washing Hands Inc. All systems functional.</p>
          <p style={{ marginTop: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <a href="mailto:the@washinghandsinc.com" style={{ color: 'var(--color-drab-light)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
              the@washinghandsinc.com
            </a>
            <a href="https://tort.washinghandsinc.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-drab-light)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
              Tort
            </a>
          </p>
        </footer>
      </main>

      {/* EASTER EGG OVERLAY */}
      {showCredo && (
        <div className="credo-overlay" onClick={() => setShowCredo(false)}>
          <div className="credo-bg-swirl"></div>
          <div className="credo-content">
            <h1 className="credo-title">Credo</h1>
            <p>God is Change, the only permanence</p>
            <p>You Control Only You, Evil is Indifference</p>
            <p>I think therefore I am</p>
            <p>Everything else is Dialectic</p>
            <p>There is no Reality, no Truth, only Witness</p>
            <p className="credo-final">The only way out is through</p>
            <p className="credo-signoff">Up, up in the air, Junior Birdmen!</p>
          </div>
        </div>
      )}
    </div>
  );
}
