import { app, shutdown } from "./app";

const PORT = Number(process.env.PORT) || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const handleShutdown = async () => {
  await shutdown();
  server.close(() => process.exit(0));
};

process.on("SIGINT", handleShutdown);
process.on("SIGTERM", handleShutdown);

export default server;
