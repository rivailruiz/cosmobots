import { PostgreesGroupsRepository } from "../../Repositories/implementations/PostgresGroupsRepository";
import { ListGroupController } from "./ListGroupController";
import { ListGroupUseCase } from "./ListGroupUseCases";

const postgreesGroupsRepository = new PostgreesGroupsRepository();

const listGroupUseCase = new ListGroupUseCase(
    postgreesGroupsRepository
);

const listGroupsController = new ListGroupController(
    listGroupUseCase
);

export { listGroupUseCase, listGroupsController }