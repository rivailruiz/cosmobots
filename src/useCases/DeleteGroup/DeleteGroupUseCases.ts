import { Group } from "../../entities/Group";
import { IGroupsRepository } from "../../Repositories/IGroupsRepository";
import { IDeleteGroupRequestDTO } from "./DeleteGroupDTO";

export class DeleteGroupUseCase {

    constructor(
        private groupsRepository: IGroupsRepository
    ) { }


    async execute(data: IDeleteGroupRequestDTO) {
        const groupExists = await this.groupsRepository.findById(data.group_id);
        if(!groupExists) {
            throw new Error("Group not found.");
        }
        const group = new Group(groupExists);
        await this.groupsRepository.Delete(group);
    }
}