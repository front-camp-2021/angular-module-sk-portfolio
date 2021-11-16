import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any = []
  constructor() { }
  getCart(){
    const cartFromLocalStorage = localStorage.getItem('cart')
    this.cart = cartFromLocalStorage !== null ? JSON.parse(cartFromLocalStorage) : []   
    return this.cart
  }
  addToCart(card: any): void{
    const cartFromLocalStorage = localStorage.getItem('cart')
    this.cart = cartFromLocalStorage !== null ? JSON.parse(cartFromLocalStorage) : []
    localStorage.setItem('cart', JSON.stringify([...this.cart, card]))
  }
  removeFromCart(card: any){
    const cartFromLocalStorage = localStorage.getItem('cart')
    const cart = cartFromLocalStorage !== null ? JSON.parse(cartFromLocalStorage) : []
    const newCart = cart.filter((product:any) => product.uniqId !== card.uniqId)
    localStorage.setItem('cart', JSON.stringify([...newCart]))
  }
}
