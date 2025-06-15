// src/components/Home.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import eventos from '../data/eventosData';
import EventCard from '../components/EventCard';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [tipo, setTipo] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [campus, setCampus] = useState('');

  // 3 eventos más antiguos para el carousel
  const antiguos = useMemo(() => {
    return eventos
      .map(e => ({
        ...e,
        dateObj: (() => {
          const [d, m, y] = e.fecha.split('/').map(Number);
          return new Date(y, m - 1, d);
        })()
      }))
      .sort((a, b) => a.dateObj - b.dateObj)
      .slice(0, 3);
  }, []);

  // 3 próximos eventos para recomendados
  const recomendados = useMemo(() => {
    const hoy = new Date();
    return eventos
      .map(e => ({
        ...e,
        dateObj: (() => {
          const [d, m, y] = e.fecha.split('/').map(Number);
          return new Date(y, m - 1, d);
        })()
      }))
      .filter(e => e.dateObj >= hoy)
      .sort((a, b) => a.dateObj - b.dateObj)
      .slice(0, 3);
  }, []);

  // 3 novedades más recientes
  const novedades = useMemo(() => {
    return eventos
      .map(e => ({
        ...e,
        dateObj: (() => {
          const [d, m, y] = e.fecha.split('/').map(Number);
          return new Date(y, m - 1, d);
        })()
      }))
      .sort((a, b) => b.dateObj - a.dateObj)
      .slice(0, 3);
  }, []);

  // Carousel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(i => (i + 1) % antiguos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [antiguos.length]);

  const prev = () =>
    setCurrentIndex(i => (i - 1 + antiguos.length) % antiguos.length);
  const next = () => setCurrentIndex(i => (i + 1) % antiguos.length);

  // Filtrado de eventos
  const filtrados = useMemo(
    () =>
      eventos.filter(
        e =>
          e.titulo.toLowerCase().includes(search.toLowerCase()) &&
          (tipo ? e.tipo === tipo : true) &&
          (modalidad ? e.modalidad === modalidad : true) &&
          (campus ? e.Campus === campus : true)
      ),
    [search, tipo, modalidad, campus]
  );

  return (
    <div className="space-y-12">
      {/* Carousel de eventos más antiguos */}
      <section className="max-w-4xl mx-auto">
        <div className="relative h-80 rounded-xl shadow-lg overflow-hidden">
          {antiguos.map((e, idx) => (
            <div
              key={e.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={e.imagen}
                alt={e.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {e.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-gray-200 line-clamp-2">
                    {e.descripcion}
                  </p>
                  <Link
                    to={`/evento/${e.id}`}
                    className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold py-2 px-4 rounded"
                  >
                    Ver evento
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* Flechas */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white text-2xl p-2 rounded-full shadow-md focus:outline-none z-20"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white text-2xl p-2 rounded-full shadow-md focus:outline-none z-20"
          >
            ›
          </button>
          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {antiguos.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Buscador y filtros */}
      <div className="flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Buscar por título"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="p-2 border rounded w-64"
        />
        <select
          value={tipo}
          onChange={e => setTipo(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Todos los tipos</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Cultura">Cultura</option>
          <option value="Economia">Economía</option>
          <option value="Derecho">Derecho</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Investigación">Investigación</option>
          <option value="Otro">Otro</option>
        </select>
        <select
          value={modalidad}
          onChange={e => setModalidad(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Todas las modalidades</option>
          <option value="Online">Online</option>
          <option value="Presencial">Presencial</option>
        </select>
        <select
          value={campus}
          onChange={e => setCampus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Campus</option>
          <option value="Casa Central Valparaíso">
            Casa Central Valparaíso
          </option>
          <option value="San Joaquín">San Joaquín</option>
          <option value="Sede Viña del Mar">Sede Viña del Mar</option>
        </select>
      </div>

      {/* Resultados o secciones */}
      {search || tipo || modalidad || campus ? (
        <section className="flex flex-wrap justify-center gap-6">
          {filtrados.length > 0 ? (
            filtrados.map(evt => <EventCard key={evt.id} evento={evt} />)
          ) : (
            <p className="text-center text-gray-500">
              No se encontraron eventos.
            </p>
          )}
        </section>
      ) : (
        <>
          <section>
            <h2 className="text-2xl font-bold mb-4">Eventos recomendados</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {recomendados.map(evt => (
                <EventCard key={evt.id} evento={evt} />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Novedades</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {novedades.map(evt => (
                <EventCard key={evt.id} evento={evt} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Botón para ver todos los eventos */}
      <div className="mt-12 text-center">
        <Link
          to="/eventos"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded px-6 py-3"
        >
          Ver todos los eventos
        </Link>
      </div>
    </div>
  );
}
