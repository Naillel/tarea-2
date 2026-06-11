import * as mundial from "../../data/mundiales.js";

export const getByCampeon = (req, res) => {
  const items = mundial.getByCampeon(req.params.pais);
  res.json(items);
};