import { PostgreesUsersRepository } from "../../Repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCases";

const postgreesUsersRepository = new PostgreesUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgreesUsersRepository
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }