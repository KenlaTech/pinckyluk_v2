import { Router } from 'express';
import { getAll, getById, create, update, delete1 } from '../controllers/venta.controller.js';
const routerVenta = Router();

// Ruta para obtener todas las categorías
routerVenta.get('/venta', getAll);

// Ruta para obtener una categoría por ID
routerVenta.get('/venta/:id', getById);

// Ruta para crear una nueva categoría
routerVenta.post('/venta', create);

// Ruta para actualizar una categoría
routerVenta.put('/venta/:id', update);

// Ruta para eliminar una categoría
routerVenta.delete('/venta/:id', delete1);

export default routerVenta;
