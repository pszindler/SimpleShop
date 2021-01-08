import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { CartproductComponent } from './cartproduct/cartproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    CartComponent,
    ProductaddComponent,
    CartproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule    
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
