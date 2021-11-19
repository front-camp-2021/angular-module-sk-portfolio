import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/components/products/core/cart/cart.service';
import { WishlistService } from '../../core/wishlist/wishlist.service';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../../models/card.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: Card = {
    id: '',
    title: '',
    rating: 0,
    price: 0,
    category: '',
    images: [''],
    brand: '',
    isCart: false,
    isWished: false,
    uniqId: 0,
  };
  isWished: boolean = false;
  isCart: boolean = false;
  isAddedToCart: boolean = false;

  constructor(
    private wishlistServices: WishlistService,
    private cartServices: CartService
  ) {}
  toggleCart(card: Card): void {
    if (!card.isCart) {
      this.isWished
        ? this.cartServices.addToCart({
            ...card,
            isCart: true,
            isWished: true,
            uniqId: uuidv4(),
          })
        : this.cartServices.addToCart({
            ...card,
            isCart: true,
            isWished: false,
            uniqId: uuidv4(),
          });
    } else {
      this.cartServices.removeFromCart(card);
    }
  }

  toggleToWishlist(card: Card): void {
    this.isWished = card.isWished;
    if (card.isWished) {
      card.isWished = false;
      this.isWished = false;
      this.wishlistServices.removeFromWishlist(card);
    } else {
      card.isWished = true;
      this.isWished = true;
      this.wishlistServices.addToWishlist(card);
    }
  }
}
