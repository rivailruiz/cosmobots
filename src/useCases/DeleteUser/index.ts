import { PostgreesUsersRepository } from "../../Repositories/implementations/PostgresUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCases";

const postgreesUsersRepository = new PostgreesUsersRepository();

const createUserUseCase = new DeleteUserUseCase(
    postgreesUsersRepository
);

const createUserController = new DeleteUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }