import { PostgreesUsersRepository } from "../../Repositories/implementations/PostgresUsersRepository";
import { ListUsersByGroupIdController } from "./ListUsersByGroupIdController";
import { ListUsersByGroupIdUseCase } from "./ListUsersByGroupIdUseCases";

const postgreesUsersRepository = new PostgreesUsersRepository();

const listUsersByGroupIdUseCase = new ListUsersByGroupIdUseCase(
    postgreesUsersRepository
);

const listUsersByGroupIdController = new ListUsersByGroupIdController(
    listUsersByGroupIdUseCase
);

export { listUsersByGroupIdUseCase, listUsersByGroupIdController }