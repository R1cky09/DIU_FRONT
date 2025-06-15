import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import eventos from '../data/eventosData';


export default function CrearEvento() {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    titulo: '',
    fecha: '',
    hora: '',
    lugar: '',
    descripcion: '',
    imagen: '',
    tipo: '',
    modalidad: '',
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoEvento = {
      id: eventos.length + 1,
      ...formulario,
    };

    console.log('Evento creado:', nuevoEvento);
    alert('Evento simulado creado correctamente!');
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Crear Nuevo Evento</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="titulo" placeholder="Título del evento" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="fecha" type="date" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="hora" type="time" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="lugar" placeholder="Lugar" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="imagen" placeholder="Nombre archivo imagen (ej: evento.jpg)" onChange={handleChange} required className="w-full p-2 border rounded" />
        <textarea name="descripcion" placeholder="Descripción" rows={4} onChange={handleChange} required className="w-full p-2 border rounded" />
        
        <select name="tipo" onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Selecciona tipo</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Cultura">Cultura</option>
          <option value="Economía">Economía</option>
          <option value="Derecho">Derecho</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Investigación">Investigación</option>
          <option value="Otro">Otro</option>
        </select>

        <select name="modalidad" onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Selecciona modalidad</option>
          <option value="online">Online</option>
          <option value="presencial">Presencial</option>
        </select>

        <select name="Campus" onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Selecciona modalidad</option>
          <option value="Casa Central Valparaíso ">Casa Central Valparaíso</option>
          <option value="San Joaquín ">San Joaquín</option>
          <option value="Sede Viña del Mar">Sede Viña del Mar</option>
        </select>


        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Crear Evento</button>
      </form>
            <div className="text-center mb-8">
        <Link to="/" className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">
          Regresar a la página principal
        </Link>
      </div>
    </div>
    
  );
}
