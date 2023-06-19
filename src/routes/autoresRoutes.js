import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutoresController.listarautores)
  .get("/autores/:id", AutoresController.listaAutorPorIdPorId)
  .post("/autores", AutoresController.cadastrarAutor)
  .put("/autores/:id", AutoresController.atualizarAutor)
  .delete("/autores/:id", AutoresController.excluirAutor);

export default router;