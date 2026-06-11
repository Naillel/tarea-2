import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import { cwd } from "node:process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const data = require("./mundiales.json");

const DATABASE_FILE = `${cwd()}/data/mundiales.db`;
const CREATE_SCRIPT = `${cwd()}/data/CREATE.SQL`;

const db = new DatabaseSync(DATABASE_FILE);

const sql = readFileSync(CREATE_SCRIPT, "utf-8");
db.exec(sql);

const stmt = db.prepare(`
  INSERT INTO mundiales
    (nombre, anio, sede, campeon, subcampeon, goleador, equipos, imagen, slug, resumen, descripcion)
  VALUES
    (:nombre, :anio, :sede, :campeon, :subcampeon, :goleador, :equipos, :imagen, :slug, :resumen, :descripcion)
`);

for (const mundial of data) {
  stmt.run(mundial);
}

console.log("Base de datos creada y poblada con éxito.");