import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FiltersService } from '../../core/filters/filters.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  categories: any = []
  brands: any = []
  filtersState:any = []
  private destroy$ = new Subject<void>()

  constructor(private FilterService: FiltersService) { }

  ngOnInit(): void {
    this.getCategories()
    this.getBrands()
  }
  ngOnDestroy(): void{
    this.destroy$.next
    this.destroy$.complete
  }

  getCategories(){
    this.FilterService.getCategories()
    .pipe(takeUntil(this.destroy$))
    .subscribe(categories => this.categories = categories.map((field:any) => ({value: field, checked:false })))
  }
  getBrands(){
    this.FilterService.getBrands()
    .pipe(takeUntil(this.destroy$))
    .subscribe(brands => this.brands = brands.map((field:any) => ({value: field, checked:false })))
  }
  clearAllFilters(){
    this.categories = this.categories.map((field:any) => ({...field, checked:false }))
    this.brands = this.brands.map((field:any) => ({...field, checked:false }))
    this.FilterService.clearActiveFilters()
  }

}
