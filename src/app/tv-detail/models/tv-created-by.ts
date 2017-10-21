export class TvCreatedBy {

    _id: number;
    _name: string;
    _gender: number;
    _profile_path: string;

    public constructor (id?:number, name?:string, gender?:number, profile_path?:string) {
        this._id = id;
        this._name = name;
        this._gender = gender;
        this._profile_path = profile_path;
    }
}
