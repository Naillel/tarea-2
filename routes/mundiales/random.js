import * as mundial from "../../data/mundiales.js";

export const random = (req, res) => {
  const item = mundial.getRandom();
  res.json(item);
};