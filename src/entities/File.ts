export class File{
    public path: string
    public content: string

    constructor(props: File){
        Object.assign(this, props);
    }
}