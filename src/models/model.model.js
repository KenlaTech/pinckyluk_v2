import { createPool } from 'mysql2/promise';
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
} from "../config.js";


const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT || 3000,
    database: DB_DATABASE
});

const Tables = {};

Tables.getAll = async (table) => {
    const [rows] = await pool.query('SELECT * FROM ' + table + '');
    return rows;
};

Tables.getById = async (id, table) => {
    const [rows] = await pool.query('SELECT * FROM ' + table + ' WHERE id = ?', [id]);
    return rows[0];
};

Tables.create = async (table, colums, values) => {
    const [result] = await pool.query(
        'INSERT INTO ' + table + ' (' + colums + ') VALUES (' + values + ')',
    );
    return result.insertId;
};

Tables.update = async (table, id, value) => {
    const [result] = await pool.query(
        'UPDATE ' + table + ' SET ' + value + ' WHERE id = ?',
        [id]
    );
    return result.affectedRows;
};

Tables.delete = async (id, table) => {
    const [result] = await pool.query('DELETE FROM ' + table + ' WHERE id = ?', [id]);
    return result.affectedRows;
};

export default Tables;
