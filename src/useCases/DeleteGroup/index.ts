import { PostgreesGroupsRepository } from "../../Repositories/implementations/PostgresGroupsRepository";
import { DeleteGroupController } from "./DeleteGroupController";
import { DeleteGroupUseCase } from "./DeleteGroupUseCases";

const postgreesGroupsRepository = new PostgreesGroupsRepository();

const deleteGroupUseCase = new DeleteGroupUseCase(
    postgreesGroupsRepository
);

const deleteGroupController = new DeleteGroupController(
    deleteGroupUseCase
);

export { deleteGroupUseCase, deleteGroupController }