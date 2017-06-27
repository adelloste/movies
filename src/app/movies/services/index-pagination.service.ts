import { Injectable } from '@angular/core';

@Injectable()
export class IndexPaginationService {

  // private _bar:boolean = false;
  
  // get bar():boolean {
  //     return this._bar;
  // }
  // set bar(theBar:boolean) {
  //     this._bar = theBar;
  // }
  
  private _index: number = 1;

  constructor() { }

  public get index(): number {
      return this._index;
  }

  public set index(value:number) {
      this._index = value;
  }

}
