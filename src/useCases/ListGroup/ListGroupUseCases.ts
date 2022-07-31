import { IGroupsRepository } from "../../Repositories/IGroupsRepository";

export class ListGroupUseCase {

    constructor(
        private groupsRepository: IGroupsRepository
    ) { }

    async execute() {
        const groupList = await this.groupsRepository.List();
        return groupList;
    }
}