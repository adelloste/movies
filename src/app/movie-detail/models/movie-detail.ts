import { BelongsToCollection } from './belongs-to-collection';
import { Genres }              from './genres';
import { ProductionCompanies } from './production-companies';
import { ProductionCountries } from './production-countries';
import { SpokenLanguages }     from './spoken-languages';

export class Movie {
    adult                 : boolean;
    backdrop_path         : string;
    belongs_to_collection : BelongsToCollection;
    budget                : number;
    genres                : Array<Genres>;
    homepage              : string;
    id                    : number;
    imdb_id               : string;
    original_language     : string;
    original_title        : string;
    overview              : string;
    popularity            : number;
    poster_path           : string;
    production_companies  : Array<ProductionCompanies>;
    production_countries  : Array<ProductionCountries>;
    release_date          : string;
    revenue               : number;
    runtime               : number;
    spoken_languages      : Array<SpokenLanguages>;
    status                : string;
    tagline               : string;
    title                 : string;
    video                 : boolean;
    vote_average          : number;
    vote_count            : number;
}
