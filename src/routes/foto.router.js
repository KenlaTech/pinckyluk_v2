import { Router } from 'express';
import { getAll, getById, create, update, delete1 } from '../controllers/foto.controller.js';
const routerFoto = Router();

// Ruta para obtener todas las categorías
routerFoto.get('/foto', getAll);

// Ruta para obtener una categoría por ID
routerFoto.get('/foto/:id', getById);

// Ruta para crear una nueva categoría
routerFoto.post('/foto', create);

// Ruta para actualizar una categoría
routerFoto.put('/foto/:id', update);

// Ruta para eliminar una categoría
routerFoto.delete('/foto/:id', delete1);

export default routerFoto;
