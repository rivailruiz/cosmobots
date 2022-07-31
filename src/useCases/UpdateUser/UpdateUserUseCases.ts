import { User } from "../../entities/User";
import { IUsersRepository } from "../../Repositories/IUsersRepository";
import { IUpdateUserRequestDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: IUpdateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findById(data.userId);
        console.log(userAlreadyExists);
        if (!userAlreadyExists) {
            throw new Error(`User not exists id ${data.userId}`);
        }
        const user = new User(data);
        await this.usersRepository.Update(user);
    }
}