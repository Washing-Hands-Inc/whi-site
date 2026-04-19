import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Terminal, Database, Brain, Sprout, Factory, Mail } from 'lucide-react';

export default function NavBar() {
  const location = useLocation();
  const isConcepts = location.pathname.includes('/concepts');
  const isLichen = location.pathname === '/lichen';
  const isStack = location.pathname === '/stack';
  const isFlint = location.pathname.includes('/flint');

  let navClass = 'navbar';
  if (isConcepts) navClass += ' navbar-concepts';
  if (isLichen) navClass += ' navbar-lichen';
  if (isStack) navClass += ' navbar-stack';
  if (isFlint) navClass += ' navbar-flint';

  return (
    <nav className={navClass}>
      <div className="nav-container">
        <NavLink to="/" className="nav-brand">
          <img src="/whi_logo_notext.png" alt="WHI" />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', fontSize: '0.85rem', alignItems: 'flex-start', justifyContent: 'center' }}>
            <span>Washing</span>
            <span>Hands</span>
            <span>Inc.</span>
          </div>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            <Terminal size={14} /> Core
          </NavLink>
          <NavLink to="/stack" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            <Database size={14} /> The Stack
          </NavLink>
          <NavLink to="/concepts" className={({isActive}) => isActive || location.pathname.includes('/concepts') ? 'nav-link active' : 'nav-link'}>
            <Brain size={14} /> Concepts
          </NavLink>
          <NavLink to="/lichen" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            <Sprout size={14} /> Lichen
          </NavLink>

          <NavLink to="/flint" className={({isActive}) => isActive || location.pathname.includes('/flint') ? 'nav-link active' : 'nav-link'}>
            <Factory size={14} /> The Strong
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
