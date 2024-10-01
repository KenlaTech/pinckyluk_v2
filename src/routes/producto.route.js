import { Router } from 'express';
import { getAll, getById, create, update, delete1 } from '../controllers/producto.controller.js';
const routerProducto = Router();

// Ruta para obtener todas las categorías
routerProducto.get('/producto', getAll);

// Ruta para obtener una categoría por ID
routerProducto.get('/producto/:id', getById);

// Ruta para crear una nueva categoría
routerProducto.post('/producto', create);

// Ruta para actualizar una categoría
routerProducto.put('/producto/:id', update);

// Ruta para eliminar una categoría
routerProducto.delete('/producto/:id', delete1);

export default routerProducto;
