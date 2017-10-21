import { TvRecommendation } from './tv-recommendation';

export class TvRecommendations {

    private _page: number;
    private _results: Array<TvRecommendation>;
    private _total_results: number;
    private _total_pages: number;

    public constructor (page?:number, results?:Array<TvRecommendation>, total_results?:number, total_pages?:number) {
        this._page = page;
        this._results = results;
        this._total_results = total_results;
        this._total_pages = total_pages;
    }
}
