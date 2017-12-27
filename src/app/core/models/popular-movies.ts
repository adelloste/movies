import { PopularMovie } from './popular-movie';

export class PopularMovies {
    page          : number;
    results       : Array<PopularMovie>;
    total_results : number;
    total_pages   : number;
}
