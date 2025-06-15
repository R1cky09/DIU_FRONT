import React from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      {/* Barra azul superior */}
      <div className="bg-blue-800 text-white text-sm" style={{ backgroundImage: "url('/bg-topbar.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-universal-access"></i> Accesibilidad
            </span>
            <div className="flex gap-1">
              <span className="cursor-pointer hover:underline">EN</span>/
              <span className="cursor-pointer hover:underline">ES</span>
            </div>
          </div>
          <div className="hidden md:flex gap-4">
            <button type="button" className="hover:underline">Sitios de interés</button>
            <button type="button" className="hover:underline">Información para</button>
            <button type="button" className="hover:underline">Servicios</button>
            <button className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">USM TV</button>
            <button className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Conecta USM</button>
          </div>
        </div>
      </div>

      {/* Logo + navegación */}
      <div className="text-white h-64" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/bg-header.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-12">
          <div className="flex items-center gap-4">
            <img src="/logo-usm-blanco.png" alt="Logo USM" className="h-20" />
            <span className="font-serif text-lg leading-tight">
              UNIVERSIDAD TÉCNICA<br />FEDERICO SANTA MARÍA
            </span>
          </div>

          <nav className="hidden lg:flex gap-6 items-center font-semibold text-sm">
            <Link to="/" className="hover:underline">Inicio</Link>
            <button type="button" className="flex items-center gap-1 hover:underline">
              Universidad <ChevronDown size={14} />
            </button>
            <button type="button" className="flex items-center gap-1 hover:underline">
              Admisión <ChevronDown size={14} />
            </button>
            <button type="button" className="flex items-center gap-1 hover:underline">
              Investigación <ChevronDown size={14} />
            </button>
            <button type="button" className="flex items-center gap-1 hover:underline">
              Extensión y Cultura <ChevronDown size={14} />
            </button>
            <Search className="cursor-pointer" size={18} />
          </nav>
        </div>
      </div>

      {/* Título y botón */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex items-center justify-between bg-header bg-cover bg-center">
        <h1 className="text-white text-4xl font-bold">Eventos USM</h1>
        <Link
          to="/crear"
          className="bg-yellow-400 text-black font-bold px-5 py-2 rounded hover:bg-yellow-300 shadow"
        >
          Publicar Evento
        </Link>
      </div>
    </header>
  );
}
