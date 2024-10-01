import express from "express";
import morgan from "morgan";

import routerAbono from './routes/abono.router.js';
import routerCategoria from './routes/categoria.router.js';
import routerCliente from './routes/cliente.router.js';
import routerFoto from './routes/foto.router.js';
import routerProducto from './routes/producto.route.js'; // Corregido
import routerReporte from './routes/reporte.model.js';
import routerTalla from './routes/talla.router.js';
import routerVenta from './routes/venta.router.js';
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", routerAbono);
app.use("/api", routerCategoria);
app.use("/api", routerCliente);
app.use("/api", routerFoto);
app.use("/api", routerProducto);
app.use("/api", routerReporte);
app.use("/api", routerTalla);
app.use("/api", routerVenta);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
});

export default app;