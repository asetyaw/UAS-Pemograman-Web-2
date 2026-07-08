import { getHealthStatus } from "../services/health.service.js";

export const getHealth = (req, res) => {
  const result = getHealthStatus();

  res.status(200).json(result);
};