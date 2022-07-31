import { User } from "../../entities/User";
import { IUsersRepository } from "../../Repositories/IUsersRepository";
import { IDeleteRequestDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {


    constructor(
        private usersRepository: IUsersRepository
    ) { }


    async execute(data: IDeleteRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        const user = new User(data);
        await this.usersRepository.Create(user);
    }
}