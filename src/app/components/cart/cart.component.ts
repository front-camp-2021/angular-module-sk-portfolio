import { Component, OnInit } from '@angular/core';
import { Card } from '../products/core/product/card.interface';
import { PaginationService } from '../products/core/pagination/pagination.service';
import { CartService } from '../products/core/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  cart:Card[] = []
  numberOfPages = 1
  currentPageProducts:Card[] = []
  constructor(private CartService: CartService, private PaginationService: PaginationService) { }

  ngOnInit(): void {
    this.cart = this.CartService.getCart()
    this.PaginationService.setProductForCurrentPage(this.cart)
    this.currentPageProducts = this.PaginationService.getProductForCurrentPage() 
    this.PaginationService.setNumberOfPages(this.cart.length )
    this.numberOfPages = this.PaginationService.getNumberOfPages()

  }
  ngDoCheck():void{
    this.cart = this.CartService.getCart()
    this.PaginationService.setProductForCurrentPage(this.cart)
    this.currentPageProducts = this.PaginationService.getProductForCurrentPage() 
    this.PaginationService.setNumberOfPages(this.cart.length )
    this.numberOfPages = this.PaginationService.getNumberOfPages()
  }

}
