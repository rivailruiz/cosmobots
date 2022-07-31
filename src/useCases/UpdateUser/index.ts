import { PostgreesUsersRepository } from "../../Repositories/implementations/PostgresUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCases";

const postgreesUsersRepository = new PostgreesUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(
    postgreesUsersRepository
);

const updateUserController = new UpdateUserController(
    updateUserUseCase
);

export { updateUserController, updateUserUseCase }