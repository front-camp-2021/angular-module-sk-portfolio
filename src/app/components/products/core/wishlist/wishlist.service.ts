import { Injectable } from '@angular/core';
import {Card} from '../../models/card.interface'

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist:Card[] = []

  getWishlist(){
    const wishlistFromLocalStorage = localStorage.getItem('wishlist')
    this.wishlist = wishlistFromLocalStorage !== null ? JSON.parse(wishlistFromLocalStorage) : []
    return this.wishlist
  }
  addToWishlist(card: Card): void{
    const wishlistFromLocalStorage = localStorage.getItem('wishlist')
    this.wishlist = wishlistFromLocalStorage !== null ? JSON.parse(wishlistFromLocalStorage) : []
    
    localStorage.setItem('wishlist', JSON.stringify([...this.wishlist, card]))
  }
  removeFromWishlist(card: Card){
    const wishlistFromLocalStorage = localStorage.getItem('wishlist')
    const wishlist = wishlistFromLocalStorage !== null ? JSON.parse(wishlistFromLocalStorage) : []
    const newWishlist = wishlist.filter((product:Card) => product.id !== card.id)
    localStorage.setItem('wishlist', JSON.stringify([...newWishlist]))
  }

}
