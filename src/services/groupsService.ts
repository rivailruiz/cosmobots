import { Request, Response } from 'express';
import { pool } from './db'


const get = async (req: Request, res: Response) => {
    pool.query('SELECT * FROM groups', (error: any, results: any) => {
        if (error) {
            throw error
        }
        res.send(results.rows);
    })
};

const create = async (req: Request, res: Response) => {

    const { group_name, group_description } = req.body

    pool.query('INSERT INTO groups (group_name, group_description) VALUES ($1, $2) RETURNING *', [group_name, group_description], (error: any, results: any) => {
        if (error) {
            throw error
        }
        res.send(`User added with ID: ${results.rows[0].group_id}`)
    })

};

const update = async (req: Request, res: Response) => {

    const group_id = req.params.group_id;

    const { group_name, group_description } = req.body

    pool.query(
        'UPDATE groups SET group_name = $1, group_description = $2 WHERE group_id = $3',
        [group_name, group_description, group_id],
        (error: any, results: any) => {
            if (error) {
                throw error
            }
            res.send(`Group modified with ID: ${group_id}`)
        }
    )

};
const remove = async (req: Request, res: Response) => {

    const group_id = req.params.group_id;

    pool.query('DELETE FROM groups WHERE group_id = $1', [group_id], (error: any, results: any) => {
        if (error) {
            throw error
        }
        res.send(`Group deleted with ID: ${group_id}`);
    })

};



module.exports = { get, create, update, remove };