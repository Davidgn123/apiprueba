import express from 'express'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';


import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import menorRoutes  from "./routes/menor.routes.js";
import  publicacionRoutes  from "./routes/publicaciones.routes.js";


const app = express()

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", menorRoutes);
app.use("/api", publicacionRoutes);

export default app;