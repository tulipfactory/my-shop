import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

    cart:any[] = []
   

    
    addToCart(product:any){
      this.cart.push(product) 
     //this adds the product to the array
    }
  }
