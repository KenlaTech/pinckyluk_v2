import { Router } from 'express';
import { getAll, getById, create, update, delete1 } from '../controllers/separado.controller.js';
const routerSeparado = Router();

// Ruta para obtener todas las categorías
routerSeparado.get('/separado', getAll);

// Ruta para obtener una categoría por ID
routerSeparado.get('/separado/:id', getById);

// Ruta para crear una nueva categoría
routerSeparado.post('/separado', create);

// Ruta para actualizar una categoría
routerSeparado.put('/separado/:id', update);

// Ruta para eliminar una categoría
routerSeparado.delete('/separado/:id', delete1);

export default routerSeparado;
