import { Recommendation } from './recommendation';

export class Recommendations {
    page          : number;
    results       : Array<Recommendation>;
    total_results : number;
    total_pages   : number;
}
