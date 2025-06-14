import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ evento }) {
  // Colores condicionales por tipo y modalidad
  const tipoColor = {
    Tecnología: 'bg-purple-200 text-purple-800',
    Cultura: 'bg-green-200 text-green-800',
    Economía: 'bg-yellow-200 text-yellow-800',
    Derecho: 'bg-blue-200 text-blue-800',
    Otro: 'bg-green-200 text-gray-700'
  };

  const modalidadColor = {
    Online: 'bg-blue-600 text-white',
    Presencial: 'bg-green-600 text-white'
  };

  // Colores condicionales por campus
  const campusColor = {
    'Casa Central Valparaíso': 'bg-red-200 text-red-800',
    'San Joaquín': 'bg-indigo-200 text-indigo-800',
    'Sede Viña del Mar': 'bg-teal-200 text-teal-800',
  };

  return (
    <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={evento.imagen} alt={evento.titulo} className="w-full h-48 object-cover" />

      {/* Etiquetas de tipo, modalidad y campus */}
      <div className="flex flex-wrap gap-2 px-4 pt-3 items-center">
        {/* Etiqueta - Tipo */}
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            tipoColor[evento.tipo] || 'bg-gray-300 text-gray-800'
          }`}
        >
          {evento.tipo}
        </span>

        {/* Etiqueta - Modalidad */}
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            modalidadColor[evento.modalidad] || 'bg-gray-500 text-white'
          }`}
        >
          {evento.modalidad}
        </span>

        {/* Etiqueta - Campus con ícono y color según campus */}
        {evento.Campus && (
          <span
            className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
              campusColor[evento.Campus] || 'bg-gray-200 text-gray-700'
            }`}
          >
            {/* Ícono de ubicación (SVG inline) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-4.418 0-8 3.582-8 8a1 1 0 001 1h14a1 1 0 001-1c0-4.418-3.582-8-8-8z"
              />
            </svg>
            {evento.Campus}
          </span>
        )}
      </div>

      <div className="p-4">
        {/* Mostramos solo la fecha aquí */}
        <div className="text-sm text-gray-500 font-semibold">
          {evento.fecha}
        </div>

        <h3 className="text-lg font-bold text-gray-800 my-2">{evento.titulo}</h3>

        <Link
          to={`/evento/${evento.id}`}
          className="text-blue-600 hover:underline"
        >
          Ver más →
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
