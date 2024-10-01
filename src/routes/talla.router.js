import { Router } from 'express';
import { getAll, getById, create, update, delete1 } from '../controllers/talla.controller.js';
const routerTalla = Router();

// Ruta para obtener todas las categorías
routerTalla.get('/talla', getAll);

// Ruta para obtener una categoría por ID
routerTalla.get('/talla/:id', getById);

// Ruta para crear una nueva categoría
routerTalla.post('/talla', create);

// Ruta para actualizar una categoría
routerTalla.put('/talla/:id', update);

// Ruta para eliminar una categoría
routerTalla.delete('/talla/:id', delete1);

export default routerTalla;
