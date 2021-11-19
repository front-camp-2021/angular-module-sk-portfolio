import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../../models/card.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductStorageService {
  private cardURL = 'http://localhost:3001/products';

  private products: Card[] = [];
  private filteredProducts:  Card[] = [];
  private searchProducts:  Card[] = [];

  constructor(private httpClient: HttpClient) {}

  getSingleProduct(id: string): Observable<any> {
    return this.httpClient.get(`${this.cardURL}?id=${id}`);
  }

  getSearchResponse(url: string): Observable<any> {
    return this.httpClient.get<Card[]>(url);
  }

  getProductsResponse(): Observable<any> {
    return this.httpClient.get<Card[]>(this.cardURL);
  }

  getFilteredProductsResponse(url?: string): Observable<any> {
    return this.httpClient.get<Card[]>(`${url}`);
  }

  setFilteredProducts(response:  Card[]): void {
    this.filteredProducts = response;
  }
  setSearchProducts(response:  Card[]): void {
    this.searchProducts = response;
  }
  setAllProducts(response:  Card[]): void {
    this.products = response;
  }

  setProducts(
    searchValue: string,
    filteredProducts:  Card[] = [],
    searchProducts:  Card[] = []
  ) {
    if (searchValue.length !== 0 && filteredProducts.length === 0) {
      return searchProducts;
    } else if (searchValue.length === 0 && filteredProducts.length !== 0) {
      return filteredProducts;
    } else {
      return filteredProducts.filter((filteredProduct:  Card) => {
        return searchProducts.some(
          (productSearch: Card) => productSearch.id === filteredProduct.id
        );
      });
    }
  }

  getProductsFromRange(products: Card[], slidersValues: any) {
    const priceRange = slidersValues[0];
    const ratingRange = slidersValues[1];

    const priceRangeProducts = products.filter(
      (card:  Card) =>
        priceRange.min <= card.price && card.price <= priceRange.max
    );
    const ratingRangeProducts = priceRangeProducts.filter(
      (card:  Card) =>
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
