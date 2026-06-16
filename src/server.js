const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "1.0.0";
const APP_ENV = process.env.APP_ENV || "local";

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Microservicio en ejecucion",
    version: APP_VERSION,
    environment: APP_ENV
  });
});

// Health check endpoint used by Kubernetes to monitor the service
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get("/info", (req, res) => {
  res.status(200).json({
    service: "k8s-microservice",
    version: APP_VERSION,
    environment: APP_ENV,
    uptimeSeconds: Math.floor(process.uptime())
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Service listening on port ${PORT} (env: ${APP_ENV}, version: ${APP_VERSION})`);
});