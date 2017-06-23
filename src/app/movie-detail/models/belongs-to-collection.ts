export class BelongsToCollection {

    private _id: number;
    private _name: string;
    private _poster_path: string;
    private _backdrop_path: string;

    public constructor (id:number, name:string, poster_path:string, backdrop_path:string) {
        this._id = id;
        this._name = name;
        this._poster_path = poster_path;
        this._backdrop_path = backdrop_path;
    }

    public getId(): number {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }

    public getPosterPath(): string {
        return this._poster_path;
    }

    public getBackdropPath(): string {
        return this._backdrop_path;
    }
}
