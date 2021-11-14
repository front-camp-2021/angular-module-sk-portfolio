import { Component, OnInit, Input, DoCheck, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FiltersService } from 'src/app/services/filters/filters.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';


import { ProductStorageService } from 'src/app/services/product/product-storage.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck, OnDestroy {

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
