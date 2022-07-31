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

    async Update(group: Group): Promise<Group> {
        const query = await pool.query('UPDATE groups SET "group_name" = $1, "group_description" = $2 WHERE "group_id" = $3', [group.group_name, group.group_description, group.group_id]);
        return query;
    }

    async Delete(group: Group): Promise<void> {
        const query = await pool.query('DELETE FROM groups WHERE "group_id" = $1', [group.group_id]);
    }

    async List(): Promise<void> {
        const users = await pool.query('SELECT * FROM groups')
        return users.rows;
    }

}