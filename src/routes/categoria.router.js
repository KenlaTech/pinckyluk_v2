import { Router } from 'express';

import { getAll, getById, create, update, delete1 } from '../controllers/categoria.controller.js';
const routerCategoria = Router();

// Ruta para obtener todas las categorías
routerCategoria.get('/categoria', getAll);

// Ruta para obtener una categoría por ID
routerCategoria.get('/categoria/:id', getById);

// Ruta para crear una nueva categoría
routerCategoria.post('/categoria', create);

// Ruta para actualizar una categoría
routerCategoria.put('/categoria/:id', update);

// Ruta para eliminar una categoría
routerCategoria.delete('/categoria/:id', delete1);

export default routerCategoria;
