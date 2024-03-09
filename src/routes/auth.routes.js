import { Router } from "express";

import {login, register, logout, profile, usuarios }  from "../controllers/auth.controller.js"
//import {authRequired} from '../middlewares/validateToken.js'

const router = Router()

router.post('/register', register);

router.post('/login',  login);

router.post('/logout',  logout);

router.get('/profile',   profile);

router.get('/usuarios', usuarios)

export default router
