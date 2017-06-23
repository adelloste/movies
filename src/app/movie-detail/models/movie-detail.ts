import { BelongsToCollection } from './belongs-to-collection';
import { Genres } from './genres';
import { ProductionCompanies } from './production-companies';
import { ProductionCountries } from './production-countries';
import { SpokenLanguages } from './spoken-languages';

export class Movie {
    
    private _adult: boolean;
    private _backdrop_path: string;
    private _belongs_to_collection: BelongsToCollection;
    private _budget: number;
    private _genres: Array<Genres>;
    private _homepage: string;
    private _id: number;
    private _imdb_id: string;
    private _original_language: string;
    private _original_title: string;
    private _overview: string;
    private _popularity: number;
    private _poster_path: string;
    private _production_companies: Array<ProductionCompanies>;
    private _production_countries: Array<ProductionCountries>;
    private _release_date: string;
    private _revenue: number;
    private _runtime: number;
    private _spoken_languages: Array<SpokenLanguages>;
    private _status: string;
    private _tagline: string;
    private _title: string;
    private _video: boolean;
    private _vote_average: number;
    private _vote_count: number;

    public constructor (adult:boolean, backdrop_path:string, belongs_to_collection:BelongsToCollection, budget:number, genres:Array<Genres>, homepage:string, id:number, imdb_id:string, original_language:string, original_title:string, overview:string, popularity:number, poster_path:string, production_companies:Array<ProductionCompanies>, production_countries:Array<ProductionCountries>, release_date:string, revenue:number, runtime:number, spoken_languages:Array<SpokenLanguages>, status:string, tagline:string, title:string, video:boolean, vote_average:number, vote_count:number) {
        this._adult = adult;
        this._backdrop_path = backdrop_path;
        this._belongs_to_collection = belongs_to_collection;
        this._budget = budget;
        this._genres = genres;
        this._homepage = homepage;
        this._id = id;
        this._imdb_id = imdb_id;
        this._original_language = original_language;
        this._original_title = original_title;
        this._overview = overview;
        this._popularity = popularity;
        this._poster_path = poster_path;
        this._production_companies = production_companies;
        this._production_countries = production_countries;
        this._release_date = release_date;
        this._revenue = revenue;
        this._runtime = runtime;
        this._spoken_languages = spoken_languages;
        this._status = status;
        this._tagline = tagline;
        this._title = title;
        this._video = video;
        this._vote_average = vote_average;
        this._vote_count = vote_count;
    }

    public getAdult(): boolean {
        return this._adult;
    }

    public getBackdropPath(): string {
        return this._backdrop_path;
    }

    public getBelongsToCollection(): BelongsToCollection {
        return this._belongs_to_collection;
    }

    public getBudget(): number {
        return this._budget;
    }

    public getGenres(): Array<Genres> {
        return this._genres;
    }

    public getHomepage(): string {
        return this._homepage;
    }

    public getId(): number {
        return this._id;
    }

    public getImdbId(): string {
        return this._imdb_id;
    }

    public getOriginalLanguage(): string {
        return this._original_language;
    }

    public getOriginalTitle(): string {
        return this._original_title;
    }

    public getOverview(): string {
        return this._overview;
    }

    public getPopularity(): number {
        return this._popularity;
    }

    public getPosterPath(): string {
        return this._poster_path;
    }

    public getProductionCompanies(): Array<ProductionCompanies> {
        return this._production_companies;
    }

    public getProductionCountries(): Array<ProductionCountries> {
        return this._production_countries;
    }

    public getReleaseDate(): string {
        return this._release_date;
    }

    public getRevenue(): number {
        return this._revenue;
    }

    public getRuntime(): number {
        return this._runtime;
    }

    public getSpokenLanguages(): Array<SpokenLanguages> {
        return this._spoken_languages;
    }

    public getStatus(): string {
        return this._status;
    }

    public getTagline(): string {
        return this._tagline;
    }

    public getTitle(): string {
        return this._title;
    }

    public getVideo(): boolean {
        return this._video;
    }

    public getVoteAverage(): number {
        return this._vote_average;
    }

    public getVoteCount(): number {
        return this._vote_count;
    }
}
