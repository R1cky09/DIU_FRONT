import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Eventos from './pages/Eventos';
import EventoDetalle from './pages/EventoDetalle';
import CrearEvento from './pages/CrearEvento';

export default function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/evento/:id" element={<EventoDetalle />} />
            <Route path="/crear" element={<CrearEvento />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
