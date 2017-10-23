import { PopularTv } from './popular-tv';

export class PopularTvs {

    private _page: number;
    private _results: Array<PopularTv>;
    private _total_results: number;
    private _total_pages: number;

    public constructor (page?:number, results?:Array<PopularTv>, total_results?:number, total_pages?:number) {
        this._page = page;
        this._results = results;
        this._total_results = total_results;
        this._total_pages = total_pages;
    }
}
