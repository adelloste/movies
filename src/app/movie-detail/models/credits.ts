import { Cast } from './cast';
import { Crew } from './crew';

export class Credits {

    private _id: number;
    private _cast: Cast;
    private _crew: Crew;

    public constructor (id:number, cast:Cast, crew:Crew) {
        this._id = id;
        this._cast = cast;
        this._crew = crew;
    }

    public getId(): number {
        return this._id;
    }

    public getCast(): Cast {
        return this._cast;
    }

    public getCrew(): Crew {
        return this._crew;
    }
}
