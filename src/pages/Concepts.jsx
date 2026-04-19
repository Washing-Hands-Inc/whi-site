import React, { useState } from 'react';
import { X } from 'lucide-react';

const conceptsList = [
  { id: 1, x: 25, y: 45, title: 'DMN & Task-Positive Networks', desc: 'The resting state vs task initiation.', body: 'The Default Mode Network (DMN) represents the neurological baseline—the resting state of mind wandering, self-reflection, and internal narrative. It exists in constant tension with the Task-Positive Network (TPN), which activates during focused, external problem-solving. At Washing Hands Inc., we view the DMN not as idle noise, but as a high-bandwidth Quantum Mind state—a superposition of potential cognitive architectures that collapse only when the TPN forces task initiation. By understanding this dialectic, we engineer systems that protect and optimize the profound stillness of the Default Mode, allowing spontaneous emergence rather than relying on exhausting, brute-force task initiation.' },
  { id: 2, x: 40, y: 65, title: 'Euclidian Polyrhythyms', desc: 'Algorithmic distribution of load.', body: 'Bjorklund\'s Euclidian Polyrhythm algorithm distributes pulses as evenly as mathematically possible across a timeframe. It is the algorithmic equivalent of organic groove. This relates directly to the Volley Effect in auditory neuroscience—where groups of neurons fire out of phase to encode high frequencies that single neurons cannot track. Our architectures use these principles to handle high-bandwidth living: distributing cognitive load across interdependent, out-of-phase nodes to process frequencies that would shatter a centralized system.' },
  { id: 3, x: 75, y: 25, title: 'Stochastic Resonance', desc: 'Harnessing the noise.', body: 'Stochastic Resonance is the phenomenon where a signal that is normally too weak to be detected is boosted by adding white noise. Noise is not the enemy; it is the carrier wave of perception. Coupled with Pignistic Probability—the necessity of making concrete betting decisions in the face of Dempster-Shafer uncertainty—we design systems that embrace environmental noise to force decisive action. This fuels the Pervasive Drive for Autonomy: systems that require noise to trigger state changes.' },
  { id: 4, x: 65, y: 75, title: 'Gestalt & Emergence', desc: 'Controlling the cognitive thermal dynamics.', body: 'The Gestalt dictates that the whole is other than the sum of its parts. Emergence is the mechanic by which this occurs—complex behaviors arising from simple rules. However, environments dictate behavior, as brutally demonstrated by the Zimbardo Stanford Study. We calculate the Enthalpy of State Change required to shift these environments. By controlling the foundational rules (the local hardware), we dictate the emergent Gestalt. We are altering the thermal dynamics of the cognitive environment.' },
  { id: 5, x: 85, y: 55, title: 'Epistemology of Self', desc: 'The timeline of the mind.', body: 'From Descartes\' Dualism (1641), to Kant\'s Transcendental Idealism, to Turing\'s Computational Theory (1950), and Dennett\'s Multiple Drafts (1991), the definition of mind evolves. Washing Hands Inc. posits the present epistemology as Persistent Data Logic: The self as an encrypted, locally hosted state space model, immune to systemic decay.' },
  { id: 6, x: 25, y: 80, title: 'Neurodivergence & AAC', desc: 'Closing the empathy gap.', body: 'The Double-Empathy Problem posits that communication breakdowns between neurotypical and neurodivergent individuals are a two-way street of mutual misunderstanding. Augmentative and Alternative Communication (AAC) is traditionally viewed as a prosthetic. We view it as an evolutionary architecture. By standardizing high-bandwidth AAC across local networks, we bypass the lossy compression of traditional spoken language, solving the double-empathy gap through precise protocols.' }
];

const connections = [
  [1, 2], [1, 3], [2, 4], [2, 6], [3, 5], [4, 5], [4, 6]
];

const nodeShapes = {
  1: <circle cx="28" cy="28" r="26" />, // Circle
  2: <polygon points="28,2 54,50 2,50" />, // Triangle
  3: <polygon points="28,2 54,28 28,54 2,28" />, // Diamond
  4: <rect x="4" y="4" width="48" height="48" />, // Square
  5: <polygon points="14,2 42,2 54,28 42,54 14,54 2,28" />, // Hexagon
  6: <polygon points="28,2 54,21 44,54 12,54 2,21" /> // Pentagon
};

export default function Concepts() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <div className="theme-indigo" style={{ minHeight: '100vh', overflow: 'hidden', position: 'relative', background: 'radial-gradient(circle at 20% 30%, rgba(91, 99, 72, 0.4) 0%, rgba(30, 34, 92, 1) 100%)' }}>
      <div className="organic-bg"></div>
      
      <header style={{ position: 'absolute', top: '6rem', left: '4rem', zIndex: 10 }}>
        <p className="tagline" style={{ display: 'inline-block', border: 'none', margin: 0, fontSize: '1.2rem', color: 'var(--color-drab-light)' }}>The Philosophical Topology</p>
      </header>

      {/* TOPOLOGY MAP */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        
        {/* SVG Lines */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
          {connections.map(([id1, id2], i) => {
            const n1 = conceptsList.find(c => c.id === id1);
            const n2 = conceptsList.find(c => c.id === id2);
            const isActive = activeNode && (activeNode.id === id1 || activeNode.id === id2);
            return (
              <g key={i}>
                <line 
                  x1={`${n1.x}%`} y1={`${n1.y}%`} 
                  x2={`${n2.x}%`} y2={`${n2.y}%`} 
                  stroke={isActive ? 'var(--color-gold)' : 'var(--color-drab-green)'} 
                  strokeWidth={isActive ? "2" : "1"} 
                  strokeOpacity={isActive ? "0.8" : "0.3"} 
                  style={{ transition: 'all 0.3s ease' }}
                />
                {/* Constant Random Energy Crackle on all lines */}
                <line 
                  x1={`${n1.x}%`} y1={`${n1.y}%`} 
                  x2={`${n2.x}%`} y2={`${n2.y}%`} 
                  stroke={isActive ? "var(--color-gold)" : "var(--color-drab-light)"} 
                  strokeWidth={isActive ? "3" : "1"} 
                  strokeDasharray="4 60"
                  strokeOpacity={isActive ? "0.8" : "0.4"}
                  style={isActive ? { filter: 'drop-shadow(0 0 5px var(--color-gold))' } : {}}
                >
                  <animate attributeName="stroke-dashoffset" from="64" to="0" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
                </line>
              </g>
            );
          })}
          
          {/* Click Ripple Animation */}
          {activeNode && (
            <circle key={`ripple-${activeNode.id}`} cx={`${activeNode.x}%`} cy={`${activeNode.y}%`} r="0" fill="none" stroke="var(--color-gold)" strokeWidth="2">
              <animate attributeName="r" from="0" to="200" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.1 0.8 0.2 1" keyTimes="0; 1" />
              <animate attributeName="opacity" from="0.8" to="0" dur="0.8s" fill="freeze" />
            </circle>
          )}
        </svg>

        {/* Nodes */}
        {conceptsList.map(c => {
          const isActive = activeNode?.id === c.id;
          return (
            <div 
              key={c.id}
              className={`topology-node ${isActive ? 'active' : ''}`}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              onClick={() => setActiveNode(c)}
              onMouseEnter={() => !activeNode && setActiveNode(c)}
            >
              <svg viewBox="0 0 56 56" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                {React.cloneElement(nodeShapes[c.id], {
                  stroke: isActive ? 'var(--color-gold)' : 'var(--color-drab-green)',
                  strokeWidth: 2,
                  fill: isActive ? 'var(--color-gold)' : 'rgba(13,15,38,0.9)',
                  style: { transition: 'all 0.3s ease' }
                })}
              </svg>
              <span style={{ position: 'relative', zIndex: 2, color: isActive ? '#000' : 'var(--color-drab-green)', fontWeight: 'bold' }}>
                0{c.id}
              </span>
              
              {/* Floating label next to node */}
              <div className="node-label" style={{ 
                position: 'absolute', top: '-35px', left: '50%', transform: 'translateX(-50%)',
                whiteSpace: 'nowrap', color: isActive ? 'var(--color-gold)' : 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-mono)', fontSize: '1.1rem', pointerEvents: 'none',
                transition: 'color 0.3s'
              }}>
                {c.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* TERMINAL SIDEBAR */}
      <div className={`concept-sidebar ${activeNode ? 'open' : ''}`}>
        {activeNode && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-gold-muted)', fontSize: '0.9rem' }}>
                NODE_0{activeNode.id} // SECURE
              </div>
              <button 
                onClick={() => setActiveNode(null)} 
                style={{ 
                  background: 'var(--color-drab-green)', border: '1px solid var(--color-gold)', 
                  color: '#fff', cursor: 'pointer', padding: '0.25rem', borderRadius: '4px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>
            
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.5rem', lineHeight: '1.2' }}>{activeNode.title}</h2>
            <h3 style={{ color: 'var(--color-drab-green)', fontSize: '1rem', marginBottom: '2rem', fontStyle: 'italic' }}>{activeNode.desc}</h3>
            
            <div style={{ width: '100%', height: '1px', background: 'var(--color-gold)', opacity: 0.3, marginBottom: '2rem' }}></div>
            
            <p style={{ color: '#ccc', lineHeight: '1.7', fontSize: '1.05rem' }}>
              {activeNode.body}
            </p>
          </>
        )}
      </div>

    </div>
  );
}
