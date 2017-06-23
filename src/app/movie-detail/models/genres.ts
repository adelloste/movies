export class Genres {

    private _id: number;
    private _name: string;

    public constructor (id:number, name:string) {
        this._id = id;
        this._name = name;
    }

    public getId(): number {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }
    
}
