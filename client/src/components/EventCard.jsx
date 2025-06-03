import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ evento }) {
  // colores condicionales por tipo y modalidad
  const tipoColor = {
    Tecnología: 'bg-purple-200 text-purple-800',
    Cultura: 'bg-green-200 text-green-800',
    Economía: 'bg-yellow-200 text-yellow-800',
    Derecho: 'bg-blue-200 text-blue-800',
    Otro: 'bg-gray-200 text-gray-700'
  };

  const modalidadColor = {
    Online: 'bg-blue-600 text-white',
    Presencial: 'bg-green-600 text-white'
  };

  return (
    <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={evento.imagen} alt={evento.titulo} className="w-full h-48 object-cover" />
      
      {/* Etiquetas de tipo y modalidad */}
      <div className="flex flex-wrap gap-2 px-4 pt-3">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tipoColor[evento.tipo] || 'bg-gray-300 text-gray-800'}`}>
          {evento.tipo}
        </span>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${modalidadColor[evento.modalidad] || 'bg-gray-500 text-white'}`}>
          {evento.modalidad}
        </span>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 font-semibold">{evento.fecha}</div>
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
