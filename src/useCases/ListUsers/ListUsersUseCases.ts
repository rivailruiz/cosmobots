import { User } from "../../entities/User";
import { IUsersRepository } from "../../Repositories/IUsersRepository";

export class ListUsersUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute() {
        const userList = await this.usersRepository.List();
        return userList;
    }
}