import { TvCast } from './tv-cast';
import { TvCrew } from './tv-crew';

export class TvCredits {

    _id: number;
    _cast: TvCast;
    _crew: TvCrew;

    public constructor (id:number, cast:TvCast, crew:TvCrew) {
        this._id = id;
        this._cast = cast;
        this._crew = crew;
    }
}
