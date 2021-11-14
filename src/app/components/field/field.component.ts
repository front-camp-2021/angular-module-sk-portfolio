import { Component, Input, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters/filters.service';
import { ProductStorageService } from 'src/app/services/product/product-storage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() value: any;
  @Input() type: any;

  private checked: boolean = false
  private cardURL = 'http://localhost:3001/products';
  private activeBrandFilters: any = []
  private activeCategoryFilters: any = []


  filterUrl: string = ''
  cardlist:any = []
  constructor(private FiltersService: FiltersService, private ProductStorageService:ProductStorageService) { }
  private destroy$ = new Subject<void>()
  ngOnInit(): void {

  }

  toggleActiveField(type: string, value: string) {
    if (type === 'category') {
      this.toggleActiveCategoryField(value)
    } else {
      this.toggleActiveBrandField(value)
    }
    this.activeCategoryFilters = this.FiltersService.getActiveCategoryFilters()
    this.activeBrandFilters = this.FiltersService.getActiveBrandFilters()
    
    this.FiltersService.setFiltersUrl(this.cardURL, this.activeCategoryFilters, this.activeBrandFilters)
    this.filterUrl = this.FiltersService.getFiltersUrl()
    this.ProductStorageService.getFilteredProductsResponse(`${this.filterUrl}`)
    .pipe(takeUntil(this.destroy$))
    .subscribe(cards => this.ProductStorageService.setFilteredProducts(cards))
    
  }

  toggleActiveCategoryField(value: string) {
    if (!this.checked) {
      this.FiltersService.addActiveCategoryField(this.setFilterValue(this.type, value))
      this.checked = true
    } else {
      this.FiltersService.removeActiveCategoryField(this.setFilterValue(this.type, value))
      this.checked = false
    }
  }
  toggleActiveBrandField(value: string) {
    if (!this.checked) {
      this.FiltersService.addActiveBrandField(this.setFilterValue(this.type, value))
      this.checked = true
    } else {
      this.FiltersService.removeActiveBrandField(this.setFilterValue(this.type, value))
      this.checked = false
    }
  }
  setFilterValue(type:string, value: string): string {
    return `${type}=${value.toLowerCase().replace(' ', "_")}`
  }



}
