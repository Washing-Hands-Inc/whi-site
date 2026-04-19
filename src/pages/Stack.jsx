import React, { useState } from 'react';
import { X } from 'lucide-react';

// Refined Abstract Organic Shapes for Category Hubs
const OrganicA = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M 50,85 L 50,50 L 25,25 M 50,50 L 75,25 M 50,50 L 50,15" strokeLinecap="round" />
    <circle cx="25" cy="25" r="5" fill="currentColor" />
    <circle cx="75" cy="25" r="5" fill="currentColor" />
    <circle cx="50" cy="15" r="5" fill="currentColor" />
    <circle cx="50" cy="85" r="3" fill="currentColor" />
  </svg>
);
const OrganicP = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="10" fill="currentColor" />
    <path d="M 50,10 C 70,10 90,30 90,50 C 90,70 70,90 50,90 C 30,90 10,70 10,50 C 10,30 30,10 50,10" strokeDasharray="5 5" />
    <path d="M 50,20 A 30,30 0 0 1 80,50" />
    <path d="M 50,80 A 30,30 0 0 1 20,50" />
  </svg>
);
const OrganicT = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M 50,10 L 85,30 L 85,70 L 50,90 L 15,70 L 15,30 Z" />
    <path d="M 50,10 L 50,90 M 85,30 L 15,70 M 85,70 L 15,30" opacity="0.4" />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
  </svg>
);
const OrganicE = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 50,10 L 90,50 L 50,90 L 10,50 Z" />
    <path d="M 50,10 L 50,90 M 10,50 L 90,50" strokeWidth="1" opacity="0.5" />
    <circle cx="50" cy="50" r="12" fill="currentColor" />
  </svg>
);

const stackData = {
  'A': {
    title: 'Architectures',
    icon: <OrganicA />,
    color: '#a3a37e',
    x: 30, y: 35,
    nodes: [
      { id: 'Mamba3-MIMO', x: -40, y: -60, desc: 'What it is: A State Space Model (SSM) architecture built for inference efficiency using Multi-Input Multi-Output matrix math.\n\nWhy it matters: Unlike traditional Transformers that choke on long contexts, Mamba allows us to process near-infinite streams of telemetry without memory ballooning. It is the mathematical bedrock for localized, constant-space reasoning.' },
      { id: 'RWKV-7', x: 20, y: -80, desc: 'What it is: An architecture that trains like a parallel Transformer but infers like a Recurrent Neural Network (RNN).\n\nWhy it matters: It gives us the best of both worlds—massive training throughput and lightweight, low-latency execution on edge devices. We use it to deploy powerful logic models directly onto restricted hardware without cloud dependencies.' },
      { id: 'Attention Transformers', x: 70, y: -20, desc: 'What it is: The classic self-attention models used for global-to-local reasoning.\n\nWhy it matters: While we aggressively move toward SSMs for linear tasks, strict Attention is still unmatched for mapping complex, non-sequential data topologies. We use them as the heavy-lift analytical engines when offline compute permits.' },
      { id: 'Gated Delta Network', x: -60, y: 30, desc: 'What it is: A routing mechanism that only updates neural states when a significant "delta" or change is detected.\n\nWhy it matters: It preserves critical battery and compute power by ignoring background noise. If the environment hasn\'t meaningfully changed, the network rests, simulating biological energy conservation.' },
      { id: 'JEPA', x: -25, y: 75, desc: 'What it is: Joint Embedding Predictive Architecture—a framework that learns to predict the abstract meaning of data rather than exact pixels or words.\n\nWhy it matters: It allows our systems to understand the intent of an environment rather than hallucinating over noisy details, granting our physical agents a grounded, fault-tolerant world model.' }
    ]
  },
  'P': {
    title: 'Projects',
    icon: <OrganicP />,
    color: '#d4af37',
    x: 70, y: 30,
    nodes: [
      { id: 'OpenMOSE', x: 40, y: -70, desc: 'What it is: An open-source orchestration framework for coordinating advanced model training and reinforcement learning.\n\nWhy it matters: It acts as the tactical command center for our deployments, allowing us to seamlessly swap out LoRA adapters and RL routines based on real-time hardware constraints without dropping the core directive.' },
      { id: 'CrossMamba', x: -50, y: -45, desc: 'What it is: An integrated fusion model that bridges the gap between text, sensor telemetry, and visual input using State Space mechanics.\n\nWhy it matters: Human environments are inherently multi-modal. CrossMamba allows us to process sight, sound, and structured data simultaneously on a single lightweight local instance.' },
      { id: 'Jamba/Zamba', x: 60, y: 30, desc: 'What it is: Hybrid architectures that surgically inject Transformer attention layers into a Mamba backbone.\n\nWhy it matters: They solve the exact problem of "forgetting" in linear models. We deploy these hybrids when a system requires both the ruthless efficiency of an SSM and the deep associative recall of a Transformer.' },
      { id: 'JSAM', x: -15, y: 65, desc: 'What it is: Joint Space Attention Models optimized for Vision-and-Language spatial navigation.\n\nWhy it matters: For physical systems moving through human environments, JSAM translates high-level text directives into literal spatial coordinates. It bridges the gap between digital intent and physical execution.' },
      { id: 'Lar-JEPA', x: 50, y: 85, desc: 'What it is: An experimental execution spine built to test and deploy JEPA world models into live agentic loops.\n\nWhy it matters: It moves predictive AI out of the laboratory and into the physical dialectic. By predicting the future states of complex systems, it pre-empts entropy before it degrades our hardware.' }
    ]
  },
  'T': {
    title: 'Technologies',
    icon: <OrganicT />,
    color: '#8fbc8f',
    x: 75, y: 70,
    nodes: [
      { id: 'Cozo', x: 50, y: -50, desc: 'What it is: A transactional database that natively speaks relational, graph, and vector logic via Datalog.\n\nWhy it matters: Reality isn\'t just a list of documents; it\'s a web of connected states. Cozo allows our local nodes to instantly query complex topological relationships in true real-time without bloated middleware.' },
      { id: 'SurrealDB', x: -70, y: -25, desc: 'What it is: A multi-model database with native real-time changefeeds and built-in edge synchronization.\n\nWhy it matters: It acts as the persistent, local memory store for our distributed agents. If a central server goes offline, SurrealDB ensures the local node retains its entire operational history and intent without skipping a beat.' },
      { id: 'Swiftide', x: 30, y: 75, desc: 'What it is: A blazing-fast, concurrent Rust library for building and streaming LLM application pipelines.\n\nWhy it matters: Python is too heavy for the edge. Swiftide allows us to orchestrate complex RAG and logic pipelines as compiled, memory-safe binaries that run effortlessly on constrained hardware.' },
      { id: 'Pathway', x: -35, y: 55, desc: 'What it is: A high-throughput streaming data processing framework built in Python and Rust.\n\nWhy it matters: It allows us to process live, high-frequency telemetry as a continuous stream rather than in static batches. The system constantly reacts and adapts to new data the millisecond it arrives.' },
      { id: 'MCP', x: 70, y: 40, desc: 'What it is: The Model Context Protocol—an open standard allowing AI models to securely interface with local data tools.\n\nWhy it matters: It is the universal adapter. MCP enables our standalone reasoning engines to securely query local file systems and databases without exposing the core logic to the open internet.' }
    ]
  },
  'E': {
    title: 'Engines',
    icon: <OrganicE />,
    color: '#6a7fb5',
    x: 25, y: 75,
    nodes: [
      { id: 'llama.cpp(-rs)', x: -40, y: -75, desc: 'What it is: A heavily optimized, bare-metal C++ engine (with Rust bindings) for running quantized models.\n\nWhy it matters: It is the absolute core of our decentralization strategy. It allows us to run GPT-4 class reasoning locally on laptops, edge servers, and embedded chips without requiring massive server farms.' },
      { id: 'candle-ml', x: 60, y: -35, desc: 'What it is: A minimalist, high-performance machine learning framework written entirely in Rust.\n\nWhy it matters: By completely removing Python from the inference stack, we eliminate runtime bloat, dependency hell, and memory leaks. It gives us military-grade reliability for production deployments.' },
      { id: 'rwkv.cpp', x: -60, y: 50, desc: 'What it is: The dedicated C++ inference engine for RWKV linear models.\n\nWhy it matters: It pushes the boundaries of speed. By compiling the RWKV architecture directly to metal, we achieve inference speeds that allow our systems to process and react to environmental variables with zero perceivable latency.' },
      { id: 'Rustlang', x: 50, y: 70, desc: 'What it is: A systems programming language that guarantees memory safety without needing a garbage collector.\n\nWhy it matters: It is the bedrock of Washing Hands Inc. We write our critical infrastructure in Rust because we cannot afford runtime panics, memory leaks, or concurrency deadlocks when managing physical entropy.' }
    ]
  }
};

export default function Stack() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeNode, setActiveNode] = useState(null);

  const handleCategoryClick = (key) => {
    setActiveCategory(activeCategory === key ? null : key);
    setActiveNode(null);
  };

  const handleNodeClick = (node, e) => {
    e.stopPropagation();
    setActiveNode(node);
  };

  return (
    <div className="theme-noir">
      <div className="noir-bg"></div>
      <div className="star-field"></div>
      <div className="stack-background-text">STACK</div>

      <main className="container" style={{ paddingTop: '8rem', height: '100vh', position: 'relative', zIndex: 2 }}>

        <div className="constellation-view" style={{ width: '100%', height: 'calc(100vh - 12rem)', position: 'relative' }}>

          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {Object.entries(stackData).map(([key, cat]) => (
              <React.Fragment key={`lines-${key}`}>
                {activeCategory === key && cat.nodes.map((node) => {
                  const nx = cat.x + (node.x / 5);
                  const ny = cat.y + (node.y / 5);

                  return (
                    <line
                      key={node.id}
                      x1={`${cat.x}%`} y1={`${cat.y}%`}
                      x2={`${nx}%`} y2={`${ny}%`}
                      stroke={cat.color}
                      strokeWidth="2"
                      strokeOpacity="0.6"
                      className="constellation-line"
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </svg>

          {Object.entries(stackData).map(([key, data]) => {
            const isActive = activeCategory === key;
            return (
              <React.Fragment key={key}>
                {/* Category Hub */}
                <div
                  className={`stack-hub ${isActive ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(key)}
                  style={{
                    position: 'absolute',
                    left: `${data.x}%`,
                    top: `${data.y}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    color: data.color,
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '100px', height: '100px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isActive ? `${data.color}44` : 'rgba(0,0,0,0.2)',
                    border: isActive ? `1px solid ${data.color}` : '1px solid transparent',
                    borderRadius: '50%',
                    transition: 'all 0.5s ease',
                    filter: isActive ? `drop-shadow(0 0 25px ${data.color})` : 'none',
                    backdropFilter: 'blur(2px)'
                  }}>
                    {data.icon}
                  </div>
                  <span style={{
                    display: 'block', marginTop: '0.8rem',
                    fontFamily: 'var(--font-mono)', fontSize: '1.2rem',
                    letterSpacing: '0.2em', opacity: isActive ? 1 : 0.6,
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? '#fff' : data.color
                  }}>
                    {data.title.toUpperCase()}
                  </span>
                </div>

                {/* Child Nodes */}
                {isActive && data.nodes.map((node) => {
                  const nx = data.x + (node.x / 5);
                  const ny = data.y + (node.y / 5);
                  const isNodeActive = activeNode?.id === node.id;

                  return (
                    <div
                      key={node.id}
                      className="stack-node-constellation"
                      onClick={(e) => handleNodeClick(node, e)}
                      style={{
                        position: 'absolute',
                        left: `${nx}%`,
                        top: `${ny}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 11,
                        color: data.color
                      }}
                    >
                      <div style={{
                        width: '14px', height: '14px',
                        borderRadius: '3px',
                        transform: 'rotate(45deg)',
                        background: isNodeActive ? data.color : 'rgba(0,0,0,0.5)',
                        border: `2px solid ${data.color}`,
                        boxShadow: isNodeActive ? `0 0 20px ${data.color}` : 'none',
                        transition: 'all 0.3s ease'
                      }}></div>
                      <span style={{
                        position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                        whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', fontSize: '1.4rem',
                        opacity: isNodeActive ? 1 : 0.8,
                        color: isNodeActive ? '#fff' : data.color,
                        letterSpacing: '0.05em',
                        textShadow: '0 0 15px rgba(0,0,0,1)',
                        fontWeight: 'bold'
                      }}>
                        {node.id}
                      </span>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>

        {/* Detail Pane */}
        <div className={`stack-detail-pane ${activeNode ? 'open' : ''}`} style={{ borderLeftColor: activeNode ? stackData[activeCategory].color : 'transparent' }}>
          {activeNode && (
            <>
              <button
                onClick={() => setActiveNode(null)}
                style={{ position: 'absolute', top: '8rem', right: '2rem', background: 'rgba(0,0,0,0.4)', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 1000, padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={32} />
              </button>
              <div className="sidebar-scroll-area" style={{ paddingTop: '12rem' }}>
                <h2 style={{ color: stackData[activeCategory].color, fontFamily: 'var(--font-mono)', fontSize: '2rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                  {activeNode.id}
                </h2>
                <div style={{ height: '2px', width: '100%', background: `linear-gradient(to right, ${stackData[activeCategory].color}, transparent)`, marginBottom: '2.5rem' }}></div>
                <p style={{ color: '#fff', fontSize: '1.2rem', lineHeight: 1.7, whiteSpace: 'pre-wrap', fontFamily: 'var(--font-sans)' }}>
                  {activeNode.desc}
                </p>
              </div>
            </>
          )}
        </div>

      </main>
    </div>
  );
}
