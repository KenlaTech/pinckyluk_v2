import { Router } from 'express';

import { getAll, getById, create, update, delete1 } from '../controllers/abono.controller.js';
const routerAbono = Router();

// Ruta para obtener todas las categorías
routerAbono.get('/abono', getAll);

// Ruta para obtener una categoría por ID
routerAbono.get('/abono/:id', getById);

// Ruta para crear una nueva categoría
routerAbono.post('/abono', create);

// Ruta para actualizar una categoría
routerAbono.put('/abono/:id', update);

// Ruta para eliminar una categoría
routerAbono.delete('/abono/:id', delete1);

export default routerAbono;
