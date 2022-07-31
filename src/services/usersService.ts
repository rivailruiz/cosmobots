import { Request, Response } from 'express';
import { pool } from './db'


const get = async (req: Request, res: Response) => {
    pool.query('SELECT * FROM users', (error: any, results: any) => {
        if (error) {
            throw error
        }
        res.send(results.rows);
    })
};

const create = async (req: Request, res: Response) => {

    const { firstname, lastname, email, groupId } = req.body
    const error = {}
    if (!firstname) {
        throw "error";
    }
    if (!lastname) {
        throw "error";
    }
    if (!email) {
        throw "error";
    }

    pool.query('INSERT INTO users (firstName, lastName, email, groupId) VALUES ($1, $2, $3, $4) RETURNING *', [firstname, lastname, email, groupId], (error: any, results: any) => {
        if (error) {
            throw error
        }
        res.send(`User added with ID: ${results.rows[0].userid}`)
    })

};

const update = async (req: Request, res: Response) => {

    const userid = req.params.userid;

    const { firstname, lastname, email, groupId } = req.body

    pool.query(
        'UPDATE users SET firstname = $1, lastname = $2, email = $3, groupId = $4 WHERE userid = $5',
        [firstname, lastname, email, groupId, userid],
        (error: any, results: any) => {
            if (error) {
                throw error
            }
            res.send(`User modified with ID: ${userid}`)
        }
    )

};
const remove = async (req: Request, res: Response) => {

    const userid = req.params.userid;

    pool.query('DELETE FROM users WHERE userid = $1', [userid], (error: any, results: any) => {
        if (error) {
            throw error
        }
        res.send(`User deleted with ID: ${userid}`);
    })

};



module.exports = { get, create, update, remove };