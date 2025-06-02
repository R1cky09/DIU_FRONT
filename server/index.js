const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const eventos = [
  {
    id: 1,
    titulo: "Charla de Ingeniería",
    fecha: "25 ABR, 11:30",
    imagen: "https://usm.cl/wp-content/uploads/2024/04/evento1.jpg",
    enlace: "https://usm.cl/evento1"
  },
  {
    id: 2,
    titulo: "Feria de Emprendimiento",
    fecha: "28 ABR, 09:00",
    imagen: "https://usm.cl/wp-content/uploads/2024/04/evento2.jpg",
    enlace: "https://usm.cl/evento2"
  }
];

app.get('/api/eventos', (req, res) => {
  res.json(eventos);
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
