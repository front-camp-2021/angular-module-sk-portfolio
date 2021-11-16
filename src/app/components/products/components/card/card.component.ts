import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/components/products/core/cart/cart.service';
import { WishlistService } from '../../core/wishlist/wishlist.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {



  @Input() card: any;
  isWished: boolean = false;
  isCart: boolean = false;

  constructor(
    private wishlistServices: WishlistService,
    private cartServices: CartService) {

  }
  ngOnInit(): void {
   
  }


  toggleCart(card:any):void{
    if(!card.isCart){
      this.isWished ? 
      this.cartServices.addToCart({...card, isCart: true, isWished:true, uniqId: uuidv4()}) : 
      this.cartServices.addToCart({...card, isCart: true, isWished:false, uniqId: uuidv4()})
    } else {
      this.cartServices.removeFromCart(card)
    }
  }

  toggleToWishlist(card: any):void {
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
