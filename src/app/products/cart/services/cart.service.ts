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

    removeFromCart(product:any){
      this.cart.splice(this.cart.indexOf(product),1) //you need curly braces when defining the function
      //but not when using it 
    }
  }
