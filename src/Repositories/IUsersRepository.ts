import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    findById(userId: string): Promise<User>;
    Create(user: User): Promise<void>;
    Update(user: User): Promise<User>;
    Delete(user: User): Promise<void>;
    List(): Promise<void>;
}