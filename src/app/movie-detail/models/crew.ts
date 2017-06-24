export class Crew {

    private _credit_id: string;
    private _department: string;
    private _gender: number;
    private _id: number;
    private _job: string;
    private _name: string;
    private _profile_path: string;

    public constructor (credit_id:string, department:string, gender:number, id:number, job:string, name:string, profile_path:string) {
        this._credit_id = credit_id;
        this._department = department;
        this._gender = gender;
        this._id = id;
        this._job = job;
        this._name = name;
        this._profile_path = profile_path;
    }

    public getCreditId(): string {
        return this._credit_id;
    }

    public getDepartment(): string {
        return this._department;
    }

    public getGender(): number {
        return this._gender;
    }

    public getId(): number {
        return this._id;
    }

    public getJob(): string {
        return this._job;
    }

    public getName(): string {
        return this._name;
    }

    public getProfilePath(): string {
        return this._profile_path;
    }
}
