import { TopRatedMovie } from './top-rated-movie';

export class TopRatedMovies {
    page          : number;
    results       : Array<TopRatedMovie>;
    total_results : number;
    total_pages   : number;
}
