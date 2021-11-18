import { Component, OnInit, DoCheck } from '@angular/core';
import { WishlistService } from '../products/core/wishlist/wishlist.service';
import { Card } from '../products/models/card.interface';
import { PaginationService } from '../products/core/pagination/pagination.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, DoCheck {

  wishlist:Card[] = []
  numberOfPages:number = 1
  currentPageProducts:Card[] = []
  constructor(private wishlistService: WishlistService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist()
    this.paginationService.setProductForCurrentPage(this.wishlist)
    this.currentPageProducts = this.paginationService.getProductForCurrentPage() 
    this.paginationService.setNumberOfPages(this.wishlist.length )
    this.numberOfPages = this.paginationService.getNumberOfPages()

  }
  ngDoCheck():void{
    this.wishlist = this.wishlistService.getWishlist()
    this.paginationService.setProductForCurrentPage(this.wishlist)
    this.currentPageProducts = this.paginationService.getProductForCurrentPage() 
    this.paginationService.setNumberOfPages(this.wishlist.length )
    this.numberOfPages = this.paginationService.getNumberOfPages()
  }

}
