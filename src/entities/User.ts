export class User {
    public readonly userId: string;

    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public groupId!: string;


    constructor(props: User) {

        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.email = props.email;
        this.groupId = props.groupId;
        this.userId = props.userId;

    }
}