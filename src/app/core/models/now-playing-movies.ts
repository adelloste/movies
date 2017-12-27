import { NowPlayingMovie } from './now-playing-movie';

export class NowPlayingMovies {
    page          : number;
    results       : Array<NowPlayingMovie>;
    dates         : any;
    total_results : number;
    total_pages   : number;
}
