import { Recommendation } from './recommendation';

export class Recommendations {

    private _page: number;
    private _results: Array<Recommendation>;
    private _total_results: number;
    private _total_pages: number;

    public constructor (page?:number, results?:Array<Recommendation>, total_results?:number, total_pages?:number) {
        this._page = page;
        this._results = results;
        this._total_results = total_results;
        this._total_pages = total_pages;
    }

    public get page(): number {
        return this._page;
    }

    public get results(): Array<Recommendation> {
        return this._results;
    }

    public get totalResults(): number {
        return this._total_results;
    }

    public get totalPages(): number {
        return this._total_pages;
    }

}
