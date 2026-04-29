import express from "express";
import crypto from "crypto"; // para IDs únicos

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Arreglo de canciones 
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
    titulo: "Intoxicao",
    artista: "Emilia Y Nicky Nicolle",
    genero: "trap",
    duracion: 240,
    anio: 2022
  }
];

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});