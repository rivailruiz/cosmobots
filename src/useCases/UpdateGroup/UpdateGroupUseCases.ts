import { Group } from "../../entities/Group";
import { IGroupsRepository } from "../../Repositories/IGroupsRepository";
import { IUpdateGroupRequestDTO } from "./UpdateGroupDTO";

export class UpdateGroupUseCase {

    constructor(
        private groupsRepository: IGroupsRepository
    ) { }


    async execute(data: IUpdateGroupRequestDTO) {
        const groupExists = await this.groupsRepository.findById(data.group_id);
        
        if(!groupExists) {
            throw new Error('Group not found.');
        }
        const group = new Group(data);
        await this.groupsRepository.Update(group);
    }
}