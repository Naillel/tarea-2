import express from "express";
import { cwd } from "node:process";

import { getAll }       from "./routes/mundiales/getAll.js";
import { getBySlug }    from "./routes/mundiales/getBySlug.js";
import { getByCampeon } from "./routes/mundiales/getByCampeon.js";
import { random }       from "./routes/mundiales/random.js";
import { search }       from "./routes/mundiales/search.js";

const app = express();

app.enable("strict routing");

const HOST = "localhost";
const PORT = 4321;

// Ruta informativa
app.get("/", (req, res) => {
  res.json({
    nombre: "API Copa Mundial FIFA",
    version: "1.0.0",
    rutas: ["/mundiales", "/mundial/:slug", "/campeon/:pais", "/random", "/search/:text"],
  });
});

// Rutas de datos
app.get("/mundiales",         getAll);
app.get("/mundial/:slug",     getBySlug);
app.get("/campeon/:pais",     getByCampeon);
app.get("/random",            random);
app.get("/search/:text",      search);

// Archivos estáticos de imágenes
app.use("/imagenes", express.static(`${cwd()}/imagenes`));

// Catch-all 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor en http://${HOST}:${PORT}/`);
});