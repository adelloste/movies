import { TvSimilar } from './tv-similar';

export class TvSimilars {

    _page: number;
    _results: Array<TvSimilar>;
    _total_results: number;
    _total_pages: number;

    public constructor (page?:number, results?:Array<TvSimilar>, total_results?:number, total_pages?:number) {
        this._page = page;
        this._results = results;
        this._total_results = total_results;
        this._total_pages = total_pages;
    }
}