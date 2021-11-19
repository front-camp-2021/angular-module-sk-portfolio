import { Injectable } from '@angular/core';
import { Card } from '../../models/card.interface';
@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  numberOfPages: number = 1;
  currentPage: number = 1;
  productsOnPage: number = 9;
  currentPageProducts: Card[] = [];

  setNumberOfPages(numberOfProducts: number) {
    this.numberOfPages = Math.ceil(numberOfProducts / this.productsOnPage);
  }
  getNumberOfPages() {
    return this.numberOfPages;
  }
  setCurrentPageNumber(pageNumber: number) {
    if (pageNumber < 1) {
      this.currentPage = 1;
    } else if (pageNumber > this.numberOfPages) {
      this.currentPage = this.numberOfPages;
    } else {
      this.currentPage = pageNumber;
    }
  }
  getCurrentPageNumber(): number {
    return this.currentPage;
  }
  setProductForCurrentPage(products: Card[]) {
    this.currentPageProducts = products.slice(
      (this.currentPage - 1) * this.productsOnPage,
      this.currentPage * this.productsOnPage
    );
  }
  getProductForCurrentPage() {
    return this.currentPageProducts;
  }
}
