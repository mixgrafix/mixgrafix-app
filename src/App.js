import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Bend. Print. Play. Create.</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Link to="/playground"><button className="w-full">🌀 Playground</button></Link>
        <Link to="/vault"><button className="w-full">🔍 Idea Vault</button></Link>
        <Link to="/cases"><button className="w-full">📚 Case Studies</button></Link>
        <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
          <button className="w-full">💬 WhatsApp Us</button>
        </a>
      </div>
    </div>
  );
}

function Playground() {
  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-semibold">🌀 Playground</h2>
      <p>Try a nostalgic print style with risograph textures.</p>
    </div>
  );
}

function Vault() {
  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-semibold">🔍 Idea Vault</h2>
      <p>Print on seed paper for an eco-conscious brand vibe.</p>
    </div>
  );
}

function CaseStudies() {
  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-semibold">📚 Case Studies</h2>
      <p>La Verita: From sketch to storefront—how we scaled a brand globally.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/cases" element={<CaseStudies />} />
      </Routes>
    </Router>
  );
}
