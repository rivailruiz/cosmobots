import { Group } from "../entities/Group";

export interface IGroupsRepository {
    findById(userId: string): Promise<Group>;
    Create(user: Group): Promise<void>;
    Update(user: Group): Promise<Group>;
    Delete(user: Group): Promise<void>;
    List(): Promise<void>;
}