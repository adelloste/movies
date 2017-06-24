export class Cast {

    private _cast_id: number;
    private _character: string;
    private _credit_id: string;
    private _gender: number;
    private _id: number;
    private _name: string;
    private _order: number;
    private _profile_path: string;

    public constructor (id:number, character:string, credit_id:string, gender:number, name:string, order:number, profile_path:string) {
        this._id = id;
        this._character = character;
        this._credit_id = credit_id;
        this._gender = gender;
        this._id = id;
        this._name = name;
        this._order = order;
        this._profile_path = profile_path;
    }

    public getCastId(): number {
        return this._cast_id;
    }

    public getCharacter(): string {
        return this._character;
    }

    public getCreditId(): string {
        return this._credit_id;
    }

    public getGender(): number {
        return this._gender;
    }

    public getId(): number {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }

    public getOrder(): number {
        return this._order;
    }

    public getProfilePath(): string {
        return this._profile_path;
    }
}
