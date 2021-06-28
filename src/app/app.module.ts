import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './products/cart/cart.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserService } from './user/services/user.service';
import { CartService } from './products/cart/services/cart.service';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminUsersComponent,
    AdminProductsComponent,
    ProductsComponent,
    CartComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
