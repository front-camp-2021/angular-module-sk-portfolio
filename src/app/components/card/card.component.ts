import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {



  @Input() card: any;
  isWished: boolean = false;

  constructor(private wishlistServices: WishlistService) {

  }
  ngOnInit(): void {
  }



  toggleToWishlist(card: any) {
     this.isWished = card.isWished
    if (card.isWished) {
      card.isWished = false
      this.isWished = false
      this.wishlistServices.removeFromWishlist(card)
    } else {     
      card.isWished = true
      this.isWished = true
      this.wishlistServices.addToWishlist(card)
    }
  }
}
