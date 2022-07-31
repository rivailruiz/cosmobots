import { PostgreesGroupsRepository } from "../../Repositories/implementations/PostgresGroupsRepository";
import { UpdateGroupController } from "./UpdateGroupController";
import { UpdateGroupUseCase } from "./UpdateGroupUseCases";

const postgreesGroupsRepository = new PostgreesGroupsRepository();

const updateGroupUseCase = new UpdateGroupUseCase(
    postgreesGroupsRepository
);

const updateGroupsController = new UpdateGroupController(
    updateGroupUseCase
);

export { updateGroupUseCase, updateGroupsController }