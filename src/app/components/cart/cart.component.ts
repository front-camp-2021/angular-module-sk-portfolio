import { Component, OnInit, DoCheck } from '@angular/core';
import { Card } from '../products/models/card.interface';
import { PaginationService } from '../products/core/pagination/pagination.service';
import { CartService } from '../products/core/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, DoCheck {
  cart: Card[] = [];
  numberOfPages = 1;
  currentPageProducts: Card[] = [];
  constructor(
    private cartService: CartService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.paginationService.setProductForCurrentPage(this.cart);
    this.currentPageProducts =
      this.paginationService.getProductForCurrentPage();
    this.paginationService.setNumberOfPages(this.cart.length);
    this.numberOfPages = this.paginationService.getNumberOfPages();
  }
  ngDoCheck(): void {
    this.cart = this.cartService.getCart();
    this.paginationService.setProductForCurrentPage(this.cart);
    this.currentPageProducts =
      this.paginationService.getProductForCurrentPage();
    this.paginationService.setNumberOfPages(this.cart.length);
    this.numberOfPages = this.paginationService.getNumberOfPages();
  }
}
