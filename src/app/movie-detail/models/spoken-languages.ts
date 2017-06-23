export class SpokenLanguages {

    private _iso_3166_1: string;
    private _name: string;

    public constructor (iso_3166_1:string, name:string) {
        this._iso_3166_1 = iso_3166_1;
        this._name = name;
    }

    public getIso(): string {
        return this._iso_3166_1;
    }

    public getName(): string {
        return this._name;
    }
    
}
