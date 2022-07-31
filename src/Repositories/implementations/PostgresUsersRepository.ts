import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { pool } from "../../services/db";

export class PostgreesUsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        const user = await pool.query('SELECT * FROM users WHERE email = $1 limit 1', [email]);
        const resp = Object.keys(user.rows).length !== 0 ? user.rows : false;
        return resp;
    }

    async findById(userId: string): Promise<User> {
        const user = await pool.query('SELECT * FROM users WHERE "userId" = $1', [userId]);
        const resp = Object.keys(user.rows).length !== 0 ? user.rows[0] : false;
        return resp;
    }

    async Create(user: User): Promise<User> {
        return await pool.query('INSERT INTO users ("firstName", "lastName", email, "groupId") VALUES ($1, $2, $3, $4) RETURNING *', [user.firstName, user.lastName, user.email, user.groupId], (error: any, results: any) => {
            if (error) {
                throw error
            }
            return true
        })
    }

    async Update(user: User): Promise<User> {
        return await pool.query(
            'UPDATE users SET "firstName" = $1, "lastName" = $2, email = $3, "groupId" = $4 WHERE "userId" = $5',
            [user.firstName, user.lastName, user.email, user.groupId, user.userId],
            (error: any, results: any) => {
                if (error) {
                    throw error
                }
                return true
            }
        )
    }

    async Delete(user: User): Promise<void> {
        const query = await pool.query('DELETE FROM users WHERE "userId" = $1', [user.userId]);
    }

    async List(): Promise<void> {
        const users = await pool.query('SELECT * FROM users')
        return users.rows;
    }

}