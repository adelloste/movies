export class TvCast {

    _character: string;
    _credit_id: string;
    _gender: number;
    _id: number;
    _name: string;
    _order: number;
    _profile_path: string;

    public constructor (character:string, credit_id:string, gender:number, id:number, name:string, order:number, profile_path:string) {
        this._character = character;
        this._credit_id = credit_id;
        this._gender = gender;
        this._id = id;
        this._name = name;
        this._order = order;
        this._profile_path = profile_path;
    }
}
