import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from '../../models/field.interface';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private categoriesURL = 'http://localhost:3001/categories';
  private brandsURL = 'http://localhost:3001/brands';

  private activeCategoryFields: string[] = []
  private activeBrandFields: string[] = []
  private ratingSlider = {}
  private priceSlider = {}
  private filterUrl: string = ''
  private fieldsState:any = []

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<any> {
    return this.httpClient.get(this.categoriesURL)
  }

  getBrands(): Observable<any> {
    return this.httpClient.get(this.brandsURL)
  }

  setFilterList(filterlist: [], listType: string) {
    return [listType, filterlist]
  }

  setSlidersValue(e:any, type: string): void {
    switch (type) {
      case ('price'):
        this.priceSlider = {
          type: type,
          min: e.value,
          max: e.highValue
        }
        break
      case ('rating'):
        this.ratingSlider = {
          type: type,
          min: e.value,
          max: e.highValue
        }
        break
    }
  }
  getSlidersValue(){
    return [this.priceSlider, this.ratingSlider]
  }
  
  addActiveCategoryField(value: string) {
    return this.activeCategoryFields.push(value)
  }
  removeActiveCategoryField(value: string) {
    return this.activeCategoryFields = this.activeCategoryFields.filter(activeCategoryField => activeCategoryField !== value)
  }

  addActiveBrandField(value: string) {
    return this.activeBrandFields.push(value)
  }
  removeActiveBrandField(value: string) {
    return this.activeBrandFields = this.activeBrandFields.filter(activeBrandField => activeBrandField !== value)
  }
  getActiveBrandFilters() {
    return this.activeBrandFields
  }
  getActiveCategoryFilters() {
    return this.activeCategoryFields
  }
  setFiltersUrl(url: string, categoryFilters: string[], brandFilters: string[]) {
    const categoryString = categoryFilters.join('&')
    const brandString = brandFilters.join('&')
    this.filterUrl = `${url}?${categoryString}&${brandString}`
  }
  getFiltersUrl() {
    return this.filterUrl
  }
  setFieldsState(newField:Field){
    const fieldsStateValid = this.fieldsState.some((field:any) => field.value === newField.value)
    fieldsStateValid ? null :  this.fieldsState.push(newField)
  }
  clearActiveFilters(){
    this.activeBrandFields = []
    this.activeCategoryFields = []
  }
  getFieldsState(){
    return this.fieldsState
  }
}
