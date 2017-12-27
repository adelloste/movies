import { TvCast } from './tv-cast';
import { TvCrew } from './tv-crew';

export class TvCredits {
    id   : number;
    cast : Array<TvCast>;
    crew : Array<TvCrew>;
}
