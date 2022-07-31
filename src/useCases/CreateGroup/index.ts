import { PostgreesGroupsRepository } from "../../Repositories/implementations/PostgresGroupsRepository";
import { CreateGroupController } from "./CreateGroupController";
import { CreateGroupUseCase } from "./CreateGroupUseCases";

const postgreesGroupsRepository = new PostgreesGroupsRepository();

const createGroupUseCase = new CreateGroupUseCase(
    postgreesGroupsRepository
);

const createGroupsController = new CreateGroupController(
    createGroupUseCase
);

export { createGroupUseCase, createGroupsController }