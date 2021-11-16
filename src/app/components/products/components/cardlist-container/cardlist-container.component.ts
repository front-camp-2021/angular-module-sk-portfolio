import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FiltersService } from '../../core/filters/filters.service';


import { PaginationService } from '../../core/pagination/pagination.service';
import { ProductStorageService } from '../../core/product/product-storage.service';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'app-cardlist-container',
  templateUrl: './cardlist-container.component.html',
  styleUrls: ['./cardlist-container.component.scss']
})
export class CardlistContainerComponent implements OnInit {

  cardlist: any = [];
  searchValue:string = '' 
  filteredProducts:any = []
  searchProducts:any = []
  activeBrandFilters:any = []
  activeCategoriesFilters:any = []
  slidersValues:any 
  sliderStatus = false
  cardlistFromRange:any = []
  findedProducts = 0
  numberOfPages = 1
  currentPageProducts:any = []
  private destroy$ = new Subject<void>()

  constructor(
    private ProductStorageService: ProductStorageService, 
    private FiltersService:FiltersService, 
    private SearchService: SearchService,
    private PaginationService: PaginationService
    ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  ngDoCheck(): void {
    this.searchValue = this.SearchService.getSearchValue()
    this.activeBrandFilters = this.FiltersService.getActiveBrandFilters()
    this.activeCategoriesFilters = this.FiltersService.getActiveCategoryFilters()
    this.slidersValues = this.FiltersService.getSlidersValue()
    
    if(this.activeBrandFilters.length !== 0 || this.activeCategoriesFilters.length !== 0 || this.searchValue.length !== 0 ){
      this.filteredProducts = this.ProductStorageService.getFilteredProducts()
      this.searchProducts = this.ProductStorageService.getSearchProducts()
      this.cardlist = this.ProductStorageService.setProducts(this.searchValue, this.filteredProducts, this.searchProducts )
    } else {
      this.cardlist = this.ProductStorageService.getAllProducts()
    }
    this.cardlistFromRange = this.ProductStorageService.getProductsFromRange(this.cardlist, this.slidersValues)
    this.findedProducts = this.cardlistFromRange.length
    this.PaginationService.setNumberOfPages(this.findedProducts)
    this.numberOfPages = this.PaginationService.getNumberOfPages()
    this.PaginationService.setProductForCurrentPage(this.cardlistFromRange)
    this.currentPageProducts = this.PaginationService.getProductForCurrentPage()
    
  }
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  getAllProducts(): void {
    this.ProductStorageService.getProductsResponse()
      .pipe(takeUntil(this.destroy$))
      .subscribe(cards => {
        return this.ProductStorageService.setAllProducts(cards)});
  }
}
