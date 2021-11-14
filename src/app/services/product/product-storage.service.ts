import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './card.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductStorageService {
  private cardURL = 'http://localhost:3001/products';

  private products: any = [];
  private filteredProducts: any = [];
  private searchProducts: any = [];

  constructor(private httpClient: HttpClient) {}

  getSearchResponse(url: string): Observable<any> {
    return this.httpClient.get<Card[]>(url);
  }

  getProductsResponse(): Observable<any> {
    return this.httpClient.get<Card[]>(this.cardURL);
  }

  getFilteredProductsResponse(url?: string): Observable<any> {
    return this.httpClient.get<Card[]>(`${url}`);
  }

  setFilteredProducts(response: any): void {
    this.filteredProducts = response;
  }
  setSearchProducts(response: any): void {
    this.searchProducts = response;
  }
  setAllProducts(response: any): void {
    this.products = response;
  }

  setProducts(
    searchValue: string,
    filteredProducts: any = [],
    searchProducts: any = []
  ) {
    if (searchValue.length !== 0 && filteredProducts.length === 0) {
      return searchProducts;
    } else if (searchValue.length === 0 && filteredProducts.length !== 0) {
      return filteredProducts;
    } else {
      return filteredProducts.filter((filteredProduct: any) => {
        return searchProducts.some(
          (productSearch: any) => productSearch.id === filteredProduct.id
        );
      });
    }
  }

  getProductsFromRange(products: Card[], slidersValues: any) {
    const priceRange = slidersValues[0];
    const ratingRange = slidersValues[1];
    
    const priceRangeProducts = products.filter(
      (card: any) =>
        priceRange.min <= card.price && card.price <= priceRange.max
    );
    const ratingRangeProducts = priceRangeProducts.filter(
      (card: any) =>
        ratingRange.min <= card.rating && card.rating <= ratingRange.max
    );
    return ratingRangeProducts;
  }

  getFilteredProducts() {
    return this.filteredProducts;
  }
  getSearchProducts() {
    return this.searchProducts;
  }
  getAllProducts() {
    return this.products;
  }
}
