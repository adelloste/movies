import { TopRatedTv } from './top-rated-tv';

export class TopRatedTvs {

    private _page: number;
    private _results: Array<TopRatedTv>;
    private _total_results: number;
    private _total_pages: number;

    public constructor (page?:number, results?:Array<TopRatedTv>, total_results?:number, total_pages?:number) {
        this._page = page;
        this._results = results;
        this._total_results = total_results;
        this._total_pages = total_pages;
    }
}
