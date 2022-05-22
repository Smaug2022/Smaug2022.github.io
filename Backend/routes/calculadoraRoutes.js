import express from "express";
import {
  getRegistros,
  postRegistros,
} from "../controllers/calculadoraController.js";
const router = express.Router();
router.get("/bitacora", getRegistros);
router.post("/registro", postRegistros);

export default router;
