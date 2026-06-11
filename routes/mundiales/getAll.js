import * as mundial from "../../data/mundiales.js";

export const getAll = (req, res) => {
  const isFull = req.query.include === "full";
  const data = isFull ? mundial.getAllFull() : mundial.getAll();
  res.json(data);
};