import { UpcomingMovie } from './upcoming-movie';

export class UpcomingMovies {
    page          : number;
    results       : Array<UpcomingMovie>;
    dates         : any;
    total_results : number;
    total_pages   : number;
}
