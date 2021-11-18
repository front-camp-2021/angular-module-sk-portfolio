import { Injectable } from '@angular/core';
import { Card } from '../../models/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Card[] = []
  getCart(){
    const cartFromLocalStorage = localStorage.getItem('cart')
    this.cart = cartFromLocalStorage !== null ? JSON.parse(cartFromLocalStorage) : []   
    return this.cart
  }
  addToCart(card: Card): void{
    const cartFromLocalStorage = localStorage.getItem('cart')
    this.cart = cartFromLocalStorage !== null ? JSON.parse(cartFromLocalStorage) : []
    localStorage.setItem('cart', JSON.stringify([...this.cart, card]))
  }
  removeFromCart(card: Card){
    const cartFromLocalStorage = localStorage.getItem('cart')
    const cart = cartFromLocalStorage !== null ? JSON.parse(cartFromLocalStorage) : []
    const newCart = cart.filter((product:Card) => product.uniqId !== card.uniqId)
    localStorage.setItem('cart', JSON.stringify([...newCart]))
  }
}
