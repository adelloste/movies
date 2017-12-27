import { TvCreatedBy }           from './tv-created-by';
import { TvGenres }              from './tv-genres';
import { TvNetworks }            from './tv-networks';
import { TvProductionCompanies } from './tv-production-companies';
import { TvSeasons }             from './tv-seasons';

export class TvDetails {
    backdrop_path        : string;
    created_by           : Array<TvCreatedBy>;
    episode_run_time     : Array<number>;
    first_air_date       : string;
    genres               : Array<TvGenres>;
    homepage             : string;
    id                   : number;
    in_production        : boolean;
    languages            : Array<string>;
    last_air_date        : string;
    name                 : string;
    networks             : Array<TvNetworks>;
    number_of_episodes   : number;
    number_of_seasons    : number;
    origin_country       : Array<string>;
    origin_language      : string;
    origin_name          : string;
    overview             : string;
    popularity           : number;
    poster_path          : string;
    production_companies : Array<TvProductionCompanies>;
    seasons              : Array<TvSeasons>;
    status               : string;
    type                 : string;
    vote_average         : number;
    vote_count           : number;
}
