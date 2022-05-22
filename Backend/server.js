import express from "express";
import bodyParser from "body-parser";
import calculadoraRoutes from "./routes/calculadoraRoutes.js";
import cors from "cors";
const app = express();
app.use(bodyParser.json());

const PORT = 8080;
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use("/", calculadoraRoutes);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`)
);
