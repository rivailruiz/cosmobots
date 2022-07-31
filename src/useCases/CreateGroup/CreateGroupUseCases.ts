import { Group } from "../../entities/Group";
import { IGroupsRepository } from "../../Repositories/IGroupsRepository";
import { ICreateGroupRequestDTO } from "./CreateGroupDTO";

export class CreateGroupUseCase {

    constructor(
        private groupsRepository: IGroupsRepository
    ) { }


    async execute(data: ICreateGroupRequestDTO) {
        const group = new Group(data);
        await this.groupsRepository.Create(group);
    }
}