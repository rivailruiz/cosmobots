import { User } from "../../entities/User";
import { IUsersRepository } from "../../Repositories/IUsersRepository";
import { IDeleteRequestDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: IDeleteRequestDTO) {
        const userExists = await this.usersRepository.findById(data.userId);
        if (!userExists) {
            throw new Error("User not found.");
        }
        const user = new User(userExists);
        await this.usersRepository.Delete(user);
    }
}