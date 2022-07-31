export class Group {
    public readonly group_id: string;

    public group_name!: string;
    public group_description!: string;
    
    constructor(props: Group) {

        this.group_id = props.group_id;
        this.group_name = props.group_name;
        this.group_description = props.group_description;
    }
}
