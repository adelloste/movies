export class Recommendation {

    private _poster_path: string;
    private _adult: boolean;
    private _overview: string;
    private _release_date: string;
    private _genre_ids: Array<number>;
    private _id: number;
    private _original_title: string;
    private _original_language: string;
    private _title: string;
    private _backdrop_path: string;
    private _popularity: string;
    private _vote_count: number;
    private _vote_average: number;
    private _video: boolean;

    public constructor (poster_path?:string, adult?:boolean, overview?:string, release_date?:string,genre_ids?:Array<number>, id?:number, original_title?:string, original_language?:string, title?:string, backdrop_path?:string, popularity?:string, vote_count?:number, vote_average?:number, video?:boolean) {
        this._poster_path = poster_path;
        this._adult = adult;
        this._overview = overview;
        this._release_date = release_date;
        this._genre_ids = genre_ids;
        this._id = id;
        this._original_title = original_title;
        this._original_language = original_language;
        this._title = title;
        this._backdrop_path = backdrop_path;
        this._popularity = popularity;
        this._vote_count = vote_count;
        this._vote_average = vote_average;
        this._video = video;
    }

    public get posterPathid(): string {
        return this._poster_path;
    }

    public get adult(): boolean {
        return this._adult;
    }

    public get overview(): string {
        return this._overview;
    }

    public get releaseDate(): string {
        return this._release_date;
    }

    public get name(): Array<number> {
        return this._genre_ids;
    }

    public get id(): number {
        return this._id;
    }

    public get originalTitle(): string {
        return this._original_title;
    }

    public get originalLanguage(): string {
        return this._original_language;
    }

    public get title(): string {
        return this._title;
    }

    public get backdropPath(): string {
        return this._backdrop_path;
    }

    public get popularity(): string {
        return this._popularity;
    }

    public get voteCount(): number {
        return this._vote_count;
    }

    public get voteAverage(): number {
        return this._vote_average;
    }

    public get video(): boolean {
        return this._video;
    }
}
