import { PostgreesUsersRepository } from "../../Repositories/implementations/PostgresUsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCases";

const postgreesUsersRepository = new PostgreesUsersRepository();

const listUsersUseCase = new ListUsersUseCase(
    postgreesUsersRepository
);

const listUsersController = new ListUsersController(
    listUsersUseCase
);

export { listUsersUseCase, listUsersController }