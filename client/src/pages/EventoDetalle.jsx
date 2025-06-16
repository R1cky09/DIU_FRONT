import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import eventos from '../data/eventosData';

export default function EventoDetalle() {
  const { id } = useParams();
  const evento = eventos.find(e => e.id === parseInt(id, 10));

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);
  const [sharedNetwork, setSharedNetwork] = useState('');

  const manejarInscripcion = (e) => {
    e.preventDefault();
    setMensaje(`Gracias por inscribirte, ${nombre}. Te enviaremos información al correo ${correo}.`);
    setNombre('');
    setCorreo('');
    setShowShareModal(true);
  };

  const compartirEn = (red) => {
    setSharedNetwork(red);
    setShowShareModal(false);
    setTimeout(() => setSharedNetwork(''), 3000);
  };

  if (!evento) return <p className="text-center text-red-600">Evento no encontrado.</p>;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/bg-header.jpg')` }}>
        <div className="absolute inset-0 flex flex-col justify-center items-start max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white">{evento.titulo}</h1>
        </div>
      </div>
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600">
        <Link to="/" className="text-blue-600 hover:underline">Inicio</Link> {'»'}
        <Link to="/eventos" className="text-blue-600 hover:underline ml-1">Eventos</Link> {'»'}
        <span className="ml-1 font-semibold text-gray-800">{evento.titulo}</span>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>{evento.descripcion}</p>
          {evento.agenda && (
            <ul className="list-disc pl-5 space-y-2">
              {evento.agenda.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        {/* Right sidebar */}
        <aside className="space-y-6">
          {/* Image Card */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={`/${evento.imagen}`} alt={evento.titulo} className="w-full h-64 object-cover" />
          </div>
          {/* Details card */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Detalles del Evento</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-600 mr-2" />
                <span><strong>Fecha:</strong> {evento.fecha}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-600 mr-2" />
                <span><strong>Hora:</strong> {evento.hora}</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-yellow-400 mr-2 rounded-full"></span>
                <span><strong>Lugar:</strong> {evento.lugar}</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-400 mr-2 rounded-full"></span>
                <span><strong>Campus:</strong> {evento.Campus}</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-purple-400 mr-2 rounded-full"></span>
                <span><strong>Tipo:</strong> {evento.tipo}</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-indigo-400 mr-2 rounded-full"></span>
                <span><strong>Modalidad:</strong> {evento.modalidad}</span>
              </div>
            </div>
          </div>
          {/* Sign-up Form */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Inscribirse</h2>
            {mensaje && <p className="mb-4 text-green-600">{mensaje}</p>}
            {sharedNetwork && <p className="mb-4 text-blue-600">Compartido en {sharedNetwork}.</p>}
            <form onSubmit={manejarInscripcion} className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={e => setCorreo(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
                Inscribirse
              </button>
            </form>
            {/* Social Media Icons */}
             <div className="mt-4 flex justify-center space-x-4">
              <button onClick={() => compartirEn('Facebook')} className="text-blue-600 hover:text-blue-800"><FaFacebookF size={24} /></button>
              <button onClick={() => compartirEn('Twitter')} className="text-cyan-500 hover:text-cyan-700"><FaTwitter size={24} /></button>
              <button onClick={() => compartirEn('LinkedIn')} className="text-blue-700 hover:text-blue-900"><FaLinkedinIn size={24} /></button>
              <button onClick={() => compartirEn('Telegram')} className="text-blue-400 hover:text-blue-600"><FaTelegramPlane size={24} /></button>
              <button onClick={() => compartirEn('WhatsApp')} className="text-green-500 hover:text-green-700"><FaWhatsapp size={24} /></button>
            </div>
          </div>
        </aside>
      </div>

      {/* Share Modal & Regresar Button */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <Link to="/" className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">
          Regresar a la página principal
        </Link>
      </div>

      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 mx-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Compartir Evento</h3>
            <div className="flex justify-between mb-6">
              <button onClick={() => compartirEn('Facebook')} className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500">
                <FaFacebookF size={20} />
              </button>
              <button onClick={() => compartirEn('Twitter')} className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-400">
                <FaTwitter size={20} />
              </button>
              <button onClick={() => compartirEn('LinkedIn')} className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-600">
                <FaLinkedinIn size={20} />
              </button>
              <button onClick={() => compartirEn('Telegram')} className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-300">
                <FaTelegramPlane size={20} />
              </button>
              <button onClick={() => compartirEn('WhatsApp')} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-400">
                <FaWhatsapp size={20} />
              </button>
            </div>
            <button onClick={() => setShowShareModal(false)} className="w-full py-2 rounded bg-gray-200 hover:bg-gray-300">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
