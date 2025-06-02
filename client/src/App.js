import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Eventos from './pages/Eventos';
import EventoDetalle from './pages/EventoDetalle';
import CrearEvento from './pages/CrearEvento'; 

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800">
        <Header />
        <Banner />
        <main className="max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Eventos />} />
            <Route path="/evento/:id" element={<EventoDetalle />} />
            <Route path="/crear" element={<CrearEvento />} /> {/* nueva ruta */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
