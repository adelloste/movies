import { AiringTodayTv } from './airing-today-tv';

export class AiringTodayTvs {

    _page: number;
    _results: Array<AiringTodayTv>;
    _total_results: number;
    _total_pages: number;

    public constructor (page?:number, results?:Array<AiringTodayTv>, total_results?:number, total_pages?:number) {
        this._page = page;
        this._results = results;
        this._total_results = total_results;
        this._total_pages = total_pages;
    }
}
