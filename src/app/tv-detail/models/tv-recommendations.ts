import { TvRecommendation } from './tv-recommendation';

export class TvRecommendations {
    page          : number;
    results       : Array<TvRecommendation>;
    total_results : number;
    total_pages   : number;
}
