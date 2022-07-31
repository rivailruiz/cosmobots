export interface IUserProvider {
    userId?: string;
    firstName: string;
    lastName: string;
    email: string;
    groupId?: string;
}

export interface IUserProvider {
    createUser(user: IUserProvider): Promise<void>
}