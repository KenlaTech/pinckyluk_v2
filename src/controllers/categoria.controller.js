import Tables from '../models/model.model.js';


const table = 'categoria';
// Obtener todas las categorías
export const getAll = async (req, res) => {
    try {
        const categorias = await Tables .getAll(table);
        res.json(categorias);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener una categoría por ID
export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Tables .getById(id, table);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json(categoria);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear una nueva categoría
export const create = async (req, res) => {
    try {
        const { columns, values } = req.body;
        const insertId = await Tables .create(table, columns, values);
        res.status(201).json({ message: 'Categoría creada', id: insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar una categoría
export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { value } = req.body;
        const affectedRows = await Tables .update(table, id, value);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json({ message: 'Categoría actualizada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar una categoría
export const delete1 = async (req, res) => {
    try {
        const { id } = req.params;
        const affectedRows = await Tables .delete(id, table);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json({ message: 'Categoría eliminada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
