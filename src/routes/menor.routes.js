import { Router } from "express";
//import { authRequired } from "../middlewares/validateToken.js";
import { getMenor,getMenores,createMenor,deleteMenor, updateMenor } from "../controllers/menor.controller.js";

const router = Router()

router.get('/menor', getMenores );
router.get('/menor/:id',  getMenor);
router.post('/menor',  createMenor );
router.delete('/menor/:id', deleteMenor );
router.put('/menor/:id', updateMenor);

export default router