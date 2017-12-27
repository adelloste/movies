import { Cast } from './cast';
import { Crew } from './crew';

export class Credits {
    id   : number;
    cast : Array<Cast>;
    crew : Array<Crew>;
}
