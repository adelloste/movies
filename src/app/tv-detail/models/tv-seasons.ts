export class TvSeasons {

    _air_date: string;
    _episode_count: number;
    _id: number;
    _poster_path: string;
    _seson_number: string;

    public constructor (air_date?:string, episode_count?:number, id?:number, poster_path?:string, seson_number?:string) {
        this._air_date = air_date;
        this._episode_count = episode_count;
        this._id = id;
        this._poster_path = poster_path;
        this._seson_number = seson_number;
    }
}
