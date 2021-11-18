import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FiltersService } from '../products/core/filters/filters.service';


import { PaginationService } from '../products/core/pagination/pagination.service';
import { ProductStorageService } from '../products/core/product/product-storage.service';
import { SearchService } from '../products/core/search/search.service';
import { Card } from '../products/models/card.interface';

@Component({
  selector: 'app-cardlist-container',
  templateUrl: './cardlist-container.component.html',
  styleUrls: ['./cardlist-container.component.scss']
})
export class CardlistContainerComponent implements OnInit {

  cardlist: Card[] = [];
  searchValue:string = '' 
  filteredProducts:Card[] = []
  searchProducts:Card[] = []
  activeBrandFilters:string[] = []
  activeCategoriesFilters:string[] = []
  slidersValues:any 
  sliderStatus = false
  cardlistFromRange:Card[] = []
  findedProducts = 0
  numberOfPages = 1
  currentPageProducts:Card[] = []
  private destroy$ = new Subject<void>()

  constructor(
    private productStorageService: ProductStorageService, 
    private filtersService:FiltersService, 
    private searchService: SearchService,
    private paginationService: PaginationService
    ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  ngDoCheck(): void {
    this.searchValue = this.searchService.getSearchValue()
    this.activeBrandFilters = this.filtersService.getActiveBrandFilters()
    this.activeCategoriesFilters = this.filtersService.getActiveCategoryFilters()
    this.slidersValues = this.filtersService.getSlidersValue()
    
    if(this.activeBrandFilters.length !== 0 || this.activeCategoriesFilters.length !== 0 || this.searchValue.length !== 0 ){
      this.filteredProducts = this.productStorageService.getFilteredProducts()
      this.searchProducts = this.productStorageService.getSearchProducts()
      this.cardlist = this.productStorageService.setProducts(this.searchValue, this.filteredProducts, this.searchProducts )
    } else {
      this.cardlist = this.productStorageService.getAllProducts()
    }
    this.cardlistFromRange = this.productStorageService.getProductsFromRange(this.cardlist, this.slidersValues)
    this.findedProducts = this.cardlistFromRange.length
    this.paginationService.setNumberOfPages(this.findedProducts)
    this.numberOfPages = this.paginationService.getNumberOfPages()
    this.paginationService.setProductForCurrentPage(this.cardlistFromRange)
    this.currentPageProducts = this.paginationService.getProductForCurrentPage()
    
  }
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  getAllProducts(): void {
    this.productStorageService.getProductsResponse()
      .pipe(takeUntil(this.destroy$))
      .subscribe(cards => {
        return this.productStorageService.setAllProducts(cards)});
  }
}
