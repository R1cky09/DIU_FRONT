import React, { useState, useMemo } from 'react';
import eventos from '../data/eventosData';
import EventCard from '../components/EventCard';

export default function Eventos() {
  const [search, setSearch] = useState('');
  const [tipo, setTipo] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [campus, setCampus] = useState('');

  // Ordenar eventos por fecha (más reciente primero)
  const eventosOrdenados = useMemo(() => {
    return [...eventos].sort((a, b) => {
      const [dayA, monthA, yearA] = a.fecha.split('/').map(Number);
      const [dayB, monthB, yearB] = b.fecha.split('/').map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      return dateB - dateA;
    });
  }, []);

  // Filtrar eventos ya ordenados
  const eventosFiltrados = eventosOrdenados.filter(e =>
    e.titulo.toLowerCase().includes(search.toLowerCase()) &&
    (tipo ? e.tipo === tipo : true) &&
    (modalidad ? e.modalidad === modalidad : true) &&
    (campus ? e.Campus === campus : true)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Buscar por título"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-60"
        />
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="p-2 border rounded">
          <option value="">Todos los tipos</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Cultura">Cultura</option>
          <option value="Economia">Economía</option>
          <option value="Derecho">Derecho</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Investigación">Investigación</option>
          <option value="Otro">Otro</option>
        </select>
        <select value={modalidad} onChange={(e) => setModalidad(e.target.value)} className="p-2 border rounded">
          <option value="">Todas las modalidades</option>
          <option value="Online">Online</option>
          <option value="Presencial">Presencial</option>
        </select>
        <select value={campus} onChange={(e) => setCampus(e.target.value)} className="p-2 border rounded">
          <option value="">Campus</option>
          <option value="Casa Central Valparaíso">Casa Central Valparaíso</option>
          <option value="San Joaquín">San Joaquín</option>
          <option value="Sede Viña del Mar">Sede Viña del Mar</option>
        </select>
      </div>

      <section className="flex flex-wrap justify-center gap-6">
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map((evento) => (
            <EventCard key={evento.id} evento={evento} />
          ))
        ) : (
          <p className="text-center text-gray-500">No se encontraron eventos.</p>
        )}
      </section>
    </div>
  );
}
