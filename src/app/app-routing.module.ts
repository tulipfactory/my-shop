import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './products/cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: '', component: SignInComponent}, //when there is an empty string this is the default page
         { path: 'signin', component: SignInComponent},
         { path: 'signup', component: SignUpComponent},
       
   { path: 'products', component: ProductsComponent},
   {path: 'cart', component: CartComponent},
   {path: 'checkout', component: CheckoutComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
