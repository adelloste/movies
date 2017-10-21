import { TvCreatedBy } from './tv-created-by';
import { TvGenres } from './tv-genres';
import { TvNetworks } from './tv-networks';
import { TvProductionCompanies } from './tv-production-companies';
import { TvSeasons } from './tv-seasons';

export class TvDetails {

    _backdrop_path: string;
    _created_by: Array<TvCreatedBy>;
    _episode_run_time: Array<number>;
    _first_air_date: string;
    _genres: Array<TvGenres>;
    _homepage: string;
    _id: number;
    _in_production: boolean;
    _languages: Array<string>;
    _last_air_date: string;
    _name: string;
    _networks: Array<TvNetworks>;
    _number_of_episodes: number;
    _number_of_seasons: number;
    _origin_country: Array<string>;
    _origin_language: string;
    _origin_name: string;
    _overview: string;
    _popularity: number;
    _poster_path: string;
    _production_companies: Array<TvProductionCompanies>;
    _seasons: Array<TvSeasons>;
    _status: string;
    _type: string;
    _vote_average: number;
    _vote_count: number;

    public constructor (backdrop_path:string, created_by:Array<TvCreatedBy>, episode_run_time:Array<number>, first_air_date:string, genres:Array<TvGenres>, homepage:string, id:number, in_production:boolean, languages:Array<string>, last_air_date:string, name:string, networks:Array<TvNetworks>, number_of_episodes:number, number_of_seasons:number, origin_country:Array<string>, origin_language:string, origin_name:string, overview:string, popularity:number, poster_path:string, production_companies:Array<TvProductionCompanies>, seasons:Array<TvSeasons>, status:string, type:string, vote_average:number, vote_count:number) {
        this._backdrop_path = backdrop_path;
        this._created_by = created_by;
        this._episode_run_time = episode_run_time;
        this._first_air_date = first_air_date;
        this._genres = genres;
        this._homepage = homepage;
        this._id = id;
        this._in_production = in_production;
        this._languages = languages;
        this._last_air_date = last_air_date;
        this._name = name;
        this._networks = networks;
        this._number_of_episodes = number_of_episodes;
        this._number_of_seasons = number_of_seasons;
        this._origin_country = origin_country;
        this._origin_language = origin_language;
        this._origin_name = origin_name;
        this._overview = overview;
        this._popularity = popularity;
        this._poster_path = poster_path;
        this._production_companies = production_companies;
        this._seasons = seasons;
        this._status = status;
        this._type = type;
        this._vote_average = vote_average;
        this._vote_count = vote_count;
    }
}
