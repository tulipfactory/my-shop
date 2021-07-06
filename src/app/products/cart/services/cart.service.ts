import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

    cart:any[] = []
   

   
    addToCart(product:any){
      this.cart.push(product) 
      console.log(this.cart)
     //this adds the product to the array
    }
  }
