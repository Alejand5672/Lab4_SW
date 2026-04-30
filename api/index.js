// Luis Alejandro Hernández Márquez - 241424
// Sistemas y tecnologías web - Laboratorio 4 
// Prof: Ludwing Cano

import express from "express";
import crypto from "crypto";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Datos de base en memoria
let canciones = [
  {
    id: crypto.randomUUID(),
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    genero: "Pop",
    duracion: 200,
    anio: 2019
  },
  {
    id: crypto.randomUUID(),
    titulo: "Shape of You",
    artista: "Ed Sheeran",
    genero: "Pop",
    duracion: 233,
    anio: 2017
  },
  {
    id: crypto.randomUUID(),
    titulo: "Smells Like Teen Spirit",
    artista: "Nirvana",
    genero: "Rock",
    duracion: 301,
    anio: 1991
  },
  {
    id: crypto.randomUUID(),
    titulo: "Tití Me Preguntó",
    artista: "Bad Bunny",
    genero: "Reggaeton",
    duracion: 240,
    anio: 2022
  }
];


// ENDPOINTS INFORMATIVOS
// GET 
app.get("/", (req, res) => {
  res.send(`
    <h1>API de Canciones </h1>
    <ul>
      <li>GET /api/canciones</li>
      <li>GET /api/canciones/:id</li>
      <li>POST /api/canciones</li>
      <li>PUT /api/canciones/:id</li>
      <li>PATCH /api/canciones/:id</li>
      <li>DELETE /api/canciones/:id</li>
    </ul>
  `);
});

// GET info
app.get("/info", (req, res) => {
  res.json({
    mensaje: "API de canciones funcionando",
    curso: "Sistemas y Tecnologías Web",
    tecnologia: "Node.js con Express",
    version: "1.0.0"
  });
});

app.get("/saludo", (req, res) => {
  res.send("Hola Bienvenido a la API de canciones");
});

app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    status: "Servidor activo",
    puerto: PORT,
    timestamp: new Date()
  });
});


// CRUD - CANCIONES

//  GET todas las canciones
app.get("/api/canciones", (req, res) => {
  const { genero, artista } = req.query;

  let resultado = canciones;

  if (genero) {
    resultado = resultado.filter(c =>
      c.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  if (artista) {
    resultado = resultado.filter(c =>
      c.artista.toLowerCase() === artista.toLowerCase()
    );
  }

  res.status(200).json({
    ok: true,
    data: resultado
  });
});

// GET canción por ID
app.get("/api/canciones/:id", (req, res) => {
  const cancion = canciones.find(c => c.id === req.params.id);

  if (!cancion) {
    return res.status(404).json({
      ok: false,
      error: "Canción no encontrada"
    });
  }

  res.json({
    ok: true,
    data: cancion
  });
});

// POST
app.post("/api/canciones", (req, res) => {
  const { titulo, artista, genero, duracion, anio } = req.body;

  if (!titulo || !artista || !genero || !duracion || !anio) {
    return res.status(400).json({
      ok: false,
      error: "Faltan campos obligatorios"
    });
  }

  const nuevaCancion = {
    id: crypto.randomUUID(),
    titulo,
    artista,
    genero,
    duracion,
    anio
  };

  canciones.push(nuevaCancion);

  res.status(201).json({
    ok: true,
    data: nuevaCancion
  });
});

// PUT
app.put("/api/canciones/:id", (req, res) => {
  const index = canciones.findIndex(c => c.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      ok: false,
      error: "Canción no encontrada"
    });
  }

  const { titulo, artista, genero, duracion, anio } = req.body;

  if (!titulo || !artista || !genero || !duracion || !anio) {
    return res.status(400).json({
      ok: false,
      error: "Faltan campos obligatorios"
    });
  }

  const actualizada = {
    id: canciones[index].id,
    titulo,
    artista,
    genero,
    duracion,
    anio
  };
   
  canciones[index] = actualizada;

  res.json({
    ok: true,
    data: actualizada
  });
});


// PATCH
app.patch("/api/canciones/:id", (req, res) => {
  const cancion = canciones.find(c => c.id === req.params.id);

  if (!cancion) {
    return res.status(404).json({
      ok: false,
      error: "Canción no encontrada"
    });
  }

  Object.assign(cancion, req.body);

  res.json({
    ok: true,
    data: cancion
  });
});

// DELETE
app.delete("/api/canciones/:id", (req, res) => {
  const index = canciones.findIndex(c => c.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      ok: false,
      error: "Canción no encontrada"
    });
  }

  canciones.splice(index, 1);

  res.json({
    ok: true,
    mensaje: "Canción eliminada correctamente"
  });
});

// error 404
app.use((req, res) => {
  res.status(404).json({
    ok: false,
    error: "Ruta no encontrada",
    ruta: req.originalUrl,
    metodo: req.method,
    sugerencia: "Visita / para ver los endpoints disponibles"
  });
});


// SERVIDOR

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});