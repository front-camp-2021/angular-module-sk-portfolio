import { Component, OnInit, OnDestroy, DoCheck, Input } from '@angular/core';
import { WishlistService } from '../../core/wishlist/wishlist.service';
import {Card} from "../../models/card.interface"

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit, OnDestroy, DoCheck {
  @Input() currentPageProducts: any = [];
  @Input() numberOfPages = 1;
  wishlist:Card[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.setWishProducts()
  }
  ngDoCheck(): void {
    this.setWishProducts()
  }
  ngOnDestroy(): void {}
  setWishProducts() {
    this.wishlist = this.wishlistService.getWishlist();
    this.currentPageProducts = this.currentPageProducts.map((product: any) =>
      this.wishlist.some((wishProduct: any) => wishProduct.id === product.id)
        ? {...product, isWished:true}
        : {...product, isWished:false}
    );
  }
}
