import { Group } from "../../entities/Group";
import { IGroupsRepository } from "../IGroupsRepository";
import { pool } from "../../services/db";

export class PostgreesGroupsRepository implements IGroupsRepository {

    async findById(groupId: string): Promise<Group> {
        const group = await pool.query('SELECT * FROM groups WHERE "group_id" = $1', [groupId]);
        const resp = Object.keys(group.rows).length !== 0 ? group.rows[0] : false;
        return resp;
    }

    async Create(group: Group): Promise<void> {
        const query = await pool.query('INSERT INTO groups ("group_name", "group_description") VALUES ($1, $2) RETURNING *', [group.group_name, group.group_description]);
        return;
    }

    async Update(user: Group): Promise<Group> {
        return await pool.query(
            'UPDATE users SET "firstName" = $1, "lastName" = $2, email = $3, "groupId" = $4 WHERE "userId" = $5',
            [user],
            (error: any, results: any) => {
                if (error) {
                    throw error
                }
                return true
            }
        )
    }

    async Delete(group: Group): Promise<void> {
        const query = await pool.query('DELETE FROM groups WHERE "group_id" = $1', [group.group_id]);
    }

    async List(): Promise<void> {
        const users = await pool.query('SELECT * FROM groups')
        return users.rows;
    }

}