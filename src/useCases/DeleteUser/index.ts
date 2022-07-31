import { PostgreesUsersRepository } from "../../Repositories/implementations/PostgresUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCases";

const postgreesUsersRepository = new PostgreesUsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(
    postgreesUsersRepository
);

const deleteUserController = new DeleteUserController(
    deleteUserUseCase
);

export { deleteUserUseCase, deleteUserController }