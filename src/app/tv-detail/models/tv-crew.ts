export class TvCrew {

    _credit_id: string;
    _department: string;
    _gender: number;
    _id: number;
    _job: string;
    _name: string;
    _profile_path: string;

    public constructor (credit_id:string, department:string, gender:number, id:number, job:string, name:string, profile_path:string) {
        this._credit_id = credit_id;
        this._department = department;
        this._gender = gender;
        this._id = id;
        this._job = job;
        this._name = name;
        this._profile_path = profile_path;
    }
}
