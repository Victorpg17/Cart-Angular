import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  private cartItems: CartItem[] = [];

  // Method to Add Item to Cart
  addItemToCart(item: Product, quantity: number = 1) {
    const existingItem = this.cartItems.find(cartItem => cartItem.productId === item.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId: item.id,
        productName: item.title,
        quantity: quantity,
        price: item.price
      });
    }

    this.saveCart();
  }

  increaseQuantity(productId: number) {
    const item = this.cartItems.find(cartItem => cartItem.productId === productId);

    if (item) {
      item.quantity += 1;
      this.saveCart();
    }
  }

  decreaseQuantity(productId: number) {
    const item = this.cartItems.find(cartItem => cartItem.productId === productId);
    
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      if (item.quantity === 0) {
        this.removeItemFromCart(productId);
      } else {
        this.saveCart();
      }
    }
  }

  removeItemFromCart(productId: number) {
    const indexItem = this.cartItems.findIndex(cartItem => cartItem.productId === productId);

    if (indexItem !== -1) {
      this.cartItems.splice(indexItem, 1);
      this.saveCart();
    }
  }

  saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}