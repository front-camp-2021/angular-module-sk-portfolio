import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FiltersService } from '../../core/filters/filters.service';
import { Field } from '../../models/field.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  categories: any = []
  brands: any = []
  filtersState:Field[] = []
  private destroy$ = new Subject<void>()

  constructor(private filterService: FiltersService) { }

  ngOnInit(): void {
    this.getCategories()
    this.getBrands()
  }
  ngOnDestroy(): void{
    this.destroy$.next
    this.destroy$.complete
  }

  getCategories(){
    this.filterService.getCategories()
    .pipe(takeUntil(this.destroy$))
    .subscribe(categories => this.categories = categories.map((field:string) => ({value: field, checked:false })))
  }
  getBrands(){
    this.filterService.getBrands()
    .pipe(takeUntil(this.destroy$))
    .subscribe(brands => this.brands = brands.map((field:string) => ({value: field, checked:false })))
  }
  clearAllFilters(){
    this.categories = this.categories.map((field:Field) => ({...field, checked:false }))
    this.brands = this.brands.map((field:Field) => ({...field, checked:false }))
    this.filterService.clearActiveFilters()
  }

}
