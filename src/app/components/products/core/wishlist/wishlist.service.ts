import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist:any = []


  constructor() { }

  getWishlist(){
    const wishlistFromLocalStorage = localStorage.getItem('wishlist')
    this.wishlist = wishlistFromLocalStorage !== null ? JSON.parse(wishlistFromLocalStorage) : []
    return this.wishlist
  }
  addToWishlist(card: any): void{
    const wishlistFromLocalStorage = localStorage.getItem('wishlist')
    this.wishlist = wishlistFromLocalStorage !== null ? JSON.parse(wishlistFromLocalStorage) : []
    
    localStorage.setItem('wishlist', JSON.stringify([...this.wishlist, card]))
  }
  removeFromWishlist(card: any){
    const wishlistFromLocalStorage = localStorage.getItem('wishlist')
    const wishlist = wishlistFromLocalStorage !== null ? JSON.parse(wishlistFromLocalStorage) : []
    const newWishlist = wishlist.filter((product:any) => product.id !== card.id)
    localStorage.setItem('wishlist', JSON.stringify([...newWishlist]))
  }

}
