export const getHealthStatus = () => {
  return {
    status: "ok",
    message: "Quest Backend API is running",
    timestamp: new Date().toISOString(),
  };
};