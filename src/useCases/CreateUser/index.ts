import { PostgreesUsersRepository } from "../../Repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateGroupUseCase } from "./CreateUserUseCases";

const postgreesUsersRepository = new PostgreesUsersRepository();

const createUserUseCase = new CreateGroupUseCase(
    postgreesUsersRepository
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }