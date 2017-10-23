export class PopularTv {

    private _poster_path: string;
    private _popularity: string;
    private _id: number;
    private _backdrop_path: string;
    private _vote_average: number;
    private _overview: string;
    private _first_air_date:string;
    private _origin_country: Array<string>;
    private _genre_ids: Array<number>;
    private _original_language: string;
    private _vote_count: number;
    private _name: string;
    private _original_name: string;

    public constructor (poster_path?:string, popularity?:string, id?:number, backdrop_path?:string, vote_average?:number, overview?:string, first_air_date?:string, origin_country?:Array<string>, genre_ids?:Array<number>, original_language?:string, vote_count?:number, name?:string, original_name?:string) {
        this._poster_path = poster_path;
        this._popularity = popularity;
        this._id = id;
        this._backdrop_path = backdrop_path;
        this._vote_average = vote_average;
        this._overview = overview;
        this._first_air_date = first_air_date;
        this._origin_country = origin_country;
        this._genre_ids = genre_ids;
        this._original_language = original_language;
        this._vote_count = vote_count;
        this._name = name;
        this._original_name = original_name;
    }
}
