import { Component, OnInit, DoCheck } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';
import { Card } from 'src/app/services/product/card.interface';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, DoCheck {

  wishlist:Card[] = []
  numberOfPages = 1
  currentPageProducts:Card[] = []
  constructor(private WishlistService: WishlistService, private PaginationService: PaginationService) { }

  ngOnInit(): void {
    this.wishlist = this.WishlistService.getWishlist()
    this.PaginationService.setProductForCurrentPage(this.wishlist)
    this.currentPageProducts = this.PaginationService.getProductForCurrentPage() 
    this.PaginationService.setNumberOfPages(this.wishlist.length )
    this.numberOfPages = this.PaginationService.getNumberOfPages()

  }
  ngDoCheck():void{
    this.wishlist = this.WishlistService.getWishlist()
    this.PaginationService.setProductForCurrentPage(this.wishlist)
    this.currentPageProducts = this.PaginationService.getProductForCurrentPage() 
    this.PaginationService.setNumberOfPages(this.wishlist.length )
    this.numberOfPages = this.PaginationService.getNumberOfPages()
  }

}
