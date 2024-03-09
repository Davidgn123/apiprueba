import { Router } from "express";
import { crearPublicacion,getPublicacionById,getPublicaciones,actualizarPublicacion,eliminarPublicacion } from "../controllers/publicaciones.controller.js";

const router = Router()


// CREATE (POST)
router.post('/publicaciones', crearPublicacion);

// READ ALL (GET)
router.get('/publicaciones', getPublicaciones);

// READ ONE (GET)
router.get('/publicaciones/:id', getPublicacionById);

// UPDATE (PUT)
router.put('/publicaciones/:id', actualizarPublicacion);

// DELETE
router.delete('/publicaciones/:id', eliminarPublicacion);

export default router;