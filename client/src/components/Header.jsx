import React from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      {/* Barra azul superior */}
      <div className="bg-blue-800 text-white text-sm">
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
            <a href="#" className="hover:underline">Sitios de interés</a>
            <a href="#" className="hover:underline">Información para</a>
            <a href="#" className="hover:underline">Servicios</a>
            <button className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">USM TV</button>
            <button className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Conecta USM</button>
            <button className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">Postula Aquí</button>
          </div>
        </div>
      </div>

      {/* Cabecera visual con fondo */}
      <div
        className="relative bg-cover bg-center h-[280px]"
        style={{
          backgroundImage: "url('/bg-header.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 h-full flex flex-col justify-between">
          {/* Logo + navegación */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo-usm-blanco.png" alt="Logo USM" className="h-20" />

              <span className="text-white font-serif text-lg leading-tight">
                UNIVERSIDAD TÉCNICA<br />
                FEDERICO SANTA MARÍA
              </span>
            </div>
            <div className="hidden lg:flex gap-6 items-center text-white font-semibold text-sm">
              <a href="#">Inicio</a>
              <a href="#" className="flex items-center gap-1">
                Universidad <ChevronDown size={14} />
              </a>
              <a href="#" className="flex items-center gap-1">
                Admisión <ChevronDown size={14} />
              </a>
              <a href="#" className="flex items-center gap-1">
                Investigación <ChevronDown size={14} />
              </a>
              <a href="#" className="flex items-center gap-1">
                Extensión y Cultura <ChevronDown size={14} />
              </a>
              <Search className="cursor-pointer" size={18} />
            </div>
          </div>

          {/* Título y botón */}
          <div className="flex items-center justify-between mt-6">
            <Link
                to="/crear"
                className="bg-yellow-400 text-black font-bold px-5 py-2 rounded hover:bg-yellow-300 shadow"
                >
                Publicar Evento
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
