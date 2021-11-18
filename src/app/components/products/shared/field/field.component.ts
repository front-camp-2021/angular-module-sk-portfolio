import { Component, Input, OnInit } from '@angular/core';
import { FiltersService } from '../../core/filters/filters.service';
import { ProductStorageService } from '../../core/product/product-storage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Field } from '../../models/field.interface';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit {
  @Input() field: Field = {
    value: '',
    checked: false,
  };
  @Input() type: any;
  private cardURL = 'http://localhost:3001/products';
  private activeBrandFilters: any = [];
  private activeCategoryFilters: any = [];

  filterUrl: string = '';
  constructor(
    private FiltersService: FiltersService,
    private ProductStorageService: ProductStorageService
  ) {}
  private destroy$ = new Subject<void>();
  ngOnInit(): void {}
  ngDoCheck(): void {}
  toggleActiveField() {
    if (this.type === 'category') {
      this.toggleActiveCategoryField(this.field.value);
    } else {
      this.toggleActiveBrandField(this.field.value);
    }
    this.activeCategoryFilters = this.FiltersService.getActiveCategoryFilters();
    this.activeBrandFilters = this.FiltersService.getActiveBrandFilters();

    this.FiltersService.setFiltersUrl(
      this.cardURL,
      this.activeCategoryFilters,
      this.activeBrandFilters
    );
    this.filterUrl = this.FiltersService.getFiltersUrl();
    this.ProductStorageService.getFilteredProductsResponse(`${this.filterUrl}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((cards) =>
        this.ProductStorageService.setFilteredProducts(cards)
      );
  }

  toggleActiveCategoryField(value: string) {
    if (!this.field.checked) {
      this.FiltersService.addActiveCategoryField(
        this.setFilterValue(this.type, value)
      );
      this.field.checked = true;
    } else {
      this.FiltersService.removeActiveCategoryField(
        this.setFilterValue(this.type, value)
      );
      this.field.checked = false;
    }
  }
  toggleActiveBrandField(value: string) {
    if (!this.field.checked) {
      this.FiltersService.addActiveBrandField(
        this.setFilterValue(this.type, value)
      );
      this.field.checked = true;
    } else {
      this.FiltersService.removeActiveBrandField(
        this.setFilterValue(this.type, value)
      );
      this.field.checked = false;
    }
  }
  setFilterValue(type: string, value: string): string {
    return `${type}=${value.toLowerCase().replace(' ', '_')}`;
  }
}
