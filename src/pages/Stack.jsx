import React, { useState } from 'react';
import { Database, Cpu, Wrench, Layers } from 'lucide-react';

const stackData = {
  'A': {
    title: 'Architectures',
    icon: <Layers size={20} />,
    color: '#cba36f',
    nodes: [
      { id: 'Mamba3-MIMO', desc: 'What it is: A State Space Model (SSM) architecture built for inference efficiency using Multi-Input Multi-Output matrix math.\n\nWhy it matters: Unlike traditional Transformers that choke on long contexts, Mamba allows us to process near-infinite streams of telemetry without memory ballooning. It is the mathematical bedrock for localized, constant-space reasoning.' },
      { id: 'RWKV-7', desc: 'What it is: An architecture that trains like a parallel Transformer but infers like a Recurrent Neural Network (RNN).\n\nWhy it matters: It gives us the best of both worlds—massive training throughput and lightweight, low-latency execution on edge devices. We use it to deploy powerful logic models directly onto restricted hardware without cloud dependencies.' },
      { id: 'Attention Transformers', desc: 'What it is: The classic self-attention models used for global-to-local reasoning.\n\nWhy it matters: While we aggressively move toward SSMs for linear tasks, strict Attention is still unmatched for mapping complex, non-sequential data topologies. We use them as the heavy-lift analytical engines when offline compute permits.' },
      { id: 'Gated Delta Network', desc: 'What it is: A routing mechanism that only updates neural states when a significant "delta" or change is detected.\n\nWhy it matters: It preserves critical battery and compute power by ignoring background noise. If the environment hasn\'t meaningfully changed, the network rests, simulating biological energy conservation.' },
      { id: 'JEPA', desc: 'What it is: Joint Embedding Predictive Architecture—a framework that learns to predict the abstract meaning of data rather than exact pixels or words.\n\nWhy it matters: It allows our systems to understand the intent of an environment rather than hallucinating over noisy details, granting our physical agents a grounded, fault-tolerant world model.' }
    ]
  },
  'P': {
    title: 'Projects',
    icon: <Cpu size={20} />,
    color: '#c86b28',
    nodes: [
      { id: 'OpenMOSE', desc: 'What it is: An open-source orchestration framework for coordinating advanced model training and reinforcement learning.\n\nWhy it matters: It acts as the tactical command center for our deployments, allowing us to seamlessly swap out LoRA adapters and RL routines based on real-time hardware constraints without dropping the core directive.' },
      { id: 'CrossMamba', desc: 'What it is: An integrated fusion model that bridges the gap between text, sensor telemetry, and visual input using State Space mechanics.\n\nWhy it matters: Human environments are inherently multi-modal. CrossMamba allows us to process sight, sound, and structured data simultaneously on a single lightweight local instance.' },
      { id: 'Jamba/Zamba', desc: 'What it is: Hybrid architectures that surgically inject Transformer attention layers into a Mamba backbone.\n\nWhy it matters: They solve the exact problem of "forgetting" in linear models. We deploy these hybrids when a system requires both the ruthless efficiency of an SSM and the deep associative recall of a Transformer.' },
      { id: 'JSAM', desc: 'What it is: Joint Space Attention Models optimized for Vision-and-Language spatial navigation.\n\nWhy it matters: For physical systems moving through human environments, JSAM translates high-level text directives into literal spatial coordinates. It bridges the gap between digital intent and physical execution.' },
      { id: 'Lar-JEPA', desc: 'What it is: An experimental execution spine built to test and deploy JEPA world models into live agentic loops.\n\nWhy it matters: It moves predictive AI out of the laboratory and into the physical dialectic. By predicting the future states of complex systems, it pre-empts entropy before it degrades our hardware.' }
    ]
  },
  'T': {
    title: 'Technologies',
    icon: <Database size={20} />,
    color: '#5b6348',
    nodes: [
      { id: 'Cozo', desc: 'What it is: A transactional database that natively speaks relational, graph, and vector logic via Datalog.\n\nWhy it matters: Reality isn\'t just a list of documents; it\'s a web of connected states. Cozo allows our local nodes to instantly query complex topological relationships in true real-time without bloated middleware.' },
      { id: 'SurrealDB', desc: 'What it is: A multi-model database with native real-time changefeeds and built-in edge synchronization.\n\nWhy it matters: It acts as the persistent, local memory store for our distributed agents. If a central server goes offline, SurrealDB ensures the local node retains its entire operational history and intent without skipping a beat.' },
      { id: 'Swiftide', desc: 'What it is: A blazing-fast, concurrent Rust library for building and streaming LLM application pipelines.\n\nWhy it matters: Python is too heavy for the edge. Swiftide allows us to orchestrate complex RAG and logic pipelines as compiled, memory-safe binaries that run effortlessly on constrained hardware.' },
      { id: 'Pathway', desc: 'What it is: A high-throughput streaming data processing framework built in Python and Rust.\n\nWhy it matters: It allows us to process live, high-frequency telemetry as a continuous stream rather than in static batches. The system constantly reacts and adapts to new data the millisecond it arrives.' },
      { id: 'MCP', desc: 'What it is: The Model Context Protocol—an open standard allowing AI models to securely interface with local data tools.\n\nWhy it matters: It is the universal adapter. MCP enables our standalone reasoning engines to securely query local file systems and databases without exposing the core logic to the open internet.' }
    ]
  },
  'E': {
    title: 'Engines',
    icon: <Wrench size={20} />,
    color: '#4a5585',
    nodes: [
      { id: 'llama.cpp(-rs)', desc: 'What it is: A heavily optimized, bare-metal C++ engine (with Rust bindings) for running quantized models.\n\nWhy it matters: It is the absolute core of our decentralization strategy. It allows us to run GPT-4 class reasoning locally on laptops, edge servers, and embedded chips without requiring massive server farms.' },
      { id: 'candle-ml', desc: 'What it is: A minimalist, high-performance machine learning framework written entirely in Rust.\n\nWhy it matters: By completely removing Python from the inference stack, we eliminate runtime bloat, dependency hell, and memory leaks. It gives us military-grade reliability for production deployments.' },
      { id: 'rwkv.cpp', desc: 'What it is: The dedicated C++ inference engine for RWKV linear models.\n\nWhy it matters: It pushes the boundaries of speed. By compiling the RWKV architecture directly to metal, we achieve inference speeds that allow our systems to process and react to environmental variables with zero perceivable latency.' },
      { id: 'Rustlang', desc: 'What it is: A systems programming language that guarantees memory safety without needing a garbage collector.\n\nWhy it matters: It is the bedrock of Washing Hands Inc. We write our critical infrastructure in Rust because we cannot afford runtime panics, memory leaks, or concurrency deadlocks when managing physical entropy.' }
    ]
  }
};

export default function Stack() {
  const [activeCategory, setActiveCategory] = useState('A');
  const [activeNode, setActiveNode] = useState(stackData['A'].nodes[0]);

  return (
    <div className="theme-noir" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="noir-bg"></div>
      
      <main className="container" style={{ paddingTop: '8rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 className="title-display-noir" style={{ fontSize: '3rem', margin: 0 }}>The Stack</h1>
          <p style={{ color: '#a39c8e', fontFamily: 'var(--font-mono)' }}>System Architecture Schematic // v2.4</p>
        </header>

        <div className="stack-terminal">
          
          {/* CATEGORY SIDEBAR */}
          <div className="stack-sidebar">
            {Object.entries(stackData).map(([key, data]) => (
              <button 
                key={key}
                className={`stack-cat-btn ${activeCategory === key ? 'active' : ''}`}
                style={{ '--cat-color': data.color }}
                onClick={() => {
                  setActiveCategory(key);
                  setActiveNode(data.nodes[0]); // Reset to first node in category
                }}
              >
                {data.icon} {data.title}
              </button>
            ))}
          </div>

          {/* MAIN TERMINAL WINDOW */}
          <div className="stack-main">
            <div className="stack-nodes-grid">
              {stackData[activeCategory].nodes.map(node => (
                <button
                  key={node.id}
                  className={`stack-node-btn ${activeNode.id === node.id ? 'active' : ''}`}
                  style={{ '--cat-color': stackData[activeCategory].color }}
                  onClick={() => setActiveNode(node)}
                >
                  <div className="node-indicator"></div>
                  {node.id}
                </button>
              ))}
            </div>

            <div className="stack-node-details">
              <h2 style={{ color: stackData[activeCategory].color }}>{activeNode.id}</h2>
              <div className="details-line" style={{ background: stackData[activeCategory].color }}></div>
              <p>{activeNode.desc}</p>
            </div>
          </div>

        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .stack-terminal {
          display: grid; grid-template-columns: 250px 1fr; gap: 2rem; background: rgba(15, 15, 15, 0.8);
          border: 1px solid #333; border-radius: 8px; padding: 2rem; box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
        }
        
        .stack-sidebar { display: flex; flex-direction: column; gap: 1rem; border-right: 1px solid #333; padding-right: 2rem; }
        
        .stack-cat-btn {
          display: flex; align-items: center; gap: 1rem; background: transparent; border: none;
          color: #888; font-family: var(--font-mono); font-size: 1.1rem;
          text-align: left; padding: 1rem; cursor: pointer; transition: all 0.2s; border-radius: 4px;
        }
        .stack-cat-btn:hover { background: rgba(255,255,255,0.05); color: #ccc; }
        .stack-cat-btn.active { color: var(--cat-color); background: rgba(255,255,255,0.05); }

        .stack-main { display: flex; flex-direction: column; gap: 2rem; }
        
        .stack-nodes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
        
        .stack-node-btn {
          display: flex; align-items: center; gap: 0.5rem; background: #111; border: 1px solid #333;
          color: #ccc; font-family: var(--font-mono); padding: 0.8rem 1rem; cursor: pointer;
          transition: all 0.2s; border-radius: 4px; text-align: left;
        }
        .stack-node-btn:hover { border-color: #555; background: #1a1a1a; }
        .node-indicator { width: 8px; height: 8px; border-radius: 50%; background: #333; transition: all 0.2s; }
        .stack-node-btn.active { border-color: var(--cat-color); background: rgba(255,255,255,0.05); }
        .stack-node-btn.active .node-indicator { background: var(--cat-color); box-shadow: 0 0 10px var(--cat-color); }

        .stack-node-details {
          background: #0a0a09; border: 1px solid #222; padding: 2rem; border-radius: 4px;
          min-height: 200px; animation: abrupt-pop 0.2s steps(2);
        }
        .stack-node-details h2 { font-family: var(--font-mono); font-size: 1.5rem; margin-bottom: 0.5rem; }
        .stack-node-details p { color: #e6e6e6; font-size: 1.1rem; line-height: 1.6; margin: 0; white-space: pre-wrap; }
        
        @media (max-width: 768px) {
          .stack-terminal { grid-template-columns: 1fr; }
          .stack-sidebar { border-right: none; border-bottom: 1px solid #333; padding-right: 0; padding-bottom: 2rem; flex-direction: row; flex-wrap: wrap; }
        }
      `}} />
    </div>
  );
}
