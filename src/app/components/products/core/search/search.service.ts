import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchValue:string = ''
  constructor() { }
  setSearchValue(value: string) {
    this.searchValue = value
  }
  getSearchValue(): string{
    return this.searchValue
  }
}
