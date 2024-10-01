import { Router } from 'express';
import { getAll, getById, create, update, delete1 } from '../controllers/reporte.controller.js';
const routerReporte = Router();

// Ruta para obtener todas las categorías
routerReporte.get('/reporte', getAll);

// Ruta para obtener una categoría por ID
routerReporte.get('/reporte/:id', getById);

// Ruta para crear una nueva categoría
routerReporte.post('/reporte', create);

// Ruta para actualizar una categoría
routerReporte.put('/reporte/:id', update);

// Ruta para eliminar una categoría
routerReporte.delete('/reporte/:id', delete1);

export default routerReporte;
