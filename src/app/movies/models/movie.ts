export class Movie {
    
    private _poster_pathid: string;
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

    public constructor (poster_pathid:string, adult:boolean, overview:string, release_date:string,genre_ids:Array<number>, id:number, original_title:string, original_language:string, title:string, backdrop_path:string, popularity:string, vote_count:number) {
        this._poster_pathid = poster_pathid;
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
    }

    public getPosterPathid(): string {
        return this._poster_pathid;
    }

    public getAdult(): boolean {
        return this._adult;
    }

    public getOverview(): string {
        return this._overview;
    }

    public getReleaseDate(): string {
        return this._release_date;
    }

    public getName(): Array<number> {
        return this._genre_ids;
    }

    public getId(): number {
        return this._id;
    }

    public getOriginalTitle(): string {
        return this._original_title;
    }

    public getOriginalLanguage(): string {
        return this._original_language;
    }

    public getTitle(): string {
        return this._title;
    }

    public getBackdropPath(): string {
        return this._backdrop_path;
    }

    public getPopularity(): string {
        return this._popularity;
    }

    public getVoteCount(): number {
        return this._vote_count;
    }
}