import { Movie }    from './movie';

export class Movies {

    private _page: number;
    private _results: Array<Movie>;
    private _total_results: number;
    private _total_pages: number;

    public constructor (page:number, results:Array<Movie>, total_results:number, total_pages:number) {
        this._page = page;
        this._results = results;
        this._total_results = total_results;
        this._total_pages = total_pages;
    }

    public getPage(): number {
        return this._page;
    }

    public getResults(): Array<Movie> {
        return this._results;
    }

    public getTotalResults(): number {
        return this._total_results;
    }

    public getTotalPages(): number {
        return this._total_pages;
    }

}
