import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:any[] = [];
  total:number = 0;

  constructor(private service: CartService) { 
    this.items = this.service.cart;
    for(var i = 0; i < this.items.length; i++) {
      this.total += this.items[i].price;
      }
      
  }

  ngOnInit(): void {
  }
removeFromCart(product: any){
  this.service.removeFromCart(product) //this is how i use the service in the component
  this.total -= product.price
}
}
