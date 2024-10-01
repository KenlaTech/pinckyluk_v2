import { Router } from 'express';
import { getAll, getById, create, update, delete1 } from '../controllers/cliente.controller.js';
const routerCliente = Router();

// Ruta para obtener todas las categorías
routerCliente.get('/cliente', getAll);

// Ruta para obtener una categoría por ID
routerCliente.get('/cliente/:id', getById);

// Ruta para crear una nueva categoría
routerCliente.post('/cliente', create);

// Ruta para actualizar una categoría
routerCliente.put('/cliente/:id', update);

// Ruta para eliminar una categoría
routerCliente.delete('/cliente/:id', delete1);

export default routerCliente;
