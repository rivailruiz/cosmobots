import { User } from "../../entities/User";
import { IUsersRepository } from "../../Repositories/IUsersRepository";
import { IListUserByGroupIdRequestDTO } from "./ListUsersByGroupIdDTO";

export class ListUsersByGroupIdUseCase {

    constructor(
        private usersRepository: IUsersRepository

    ) { }

    async execute(data: IListUserByGroupIdRequestDTO) {
        const userList = await this.usersRepository.ListByGroupId(data.groupId);
        return userList;
    }
}