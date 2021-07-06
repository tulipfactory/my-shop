import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from './cart/services/cart.service';
//import observable and firestore to fetch data from database
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: Observable<any[]>;
  //data will be returned as an observable, which is why we need
  //to create an observable "items: Observable<any[]>"
  //its datatype is 'any' so that it can have any sort of data
  constructor(db: AngularFirestore, private service: CartService, private route: Router) { 
    this.items = db.collection('items').valueChanges();
    
    
  }
//we enter this code in the constructor so that the data is
//executed upon component creation
  addToCart(item:any){
    
  //this allows the addtocart function to accept the item in the click 
  this.service.addToCart(item)
  this.route.navigate(["cart"])
  }

  ngOnInit(): void {
  }

}
