import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductStorageService } from 'src/app/services/product/product-storage.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private productsUrl: any = new URL('http://localhost:3001/products')

  private destroy$ = new Subject<void>()

  constructor(private ProductStorageService: ProductStorageService, private SearchService: SearchService) { }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  getSearhUrl(e: any, inputValue: string): void {
    e.preventDefault()
    this.SearchService.setSearchValue(inputValue)
    this.productsUrl.searchParams.set("q", inputValue)
    this.ProductStorageService.getSearchResponse(this.productsUrl.href)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => this.ProductStorageService.setSearchProducts(response))

  }
}
