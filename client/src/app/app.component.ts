import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductaddComponent } from './productadd/productadd.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'S1mpleShop';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
  
  productList = [
    {name: 'Product', price: 420.69}
  ]
  cartProductList = [];  

  addProductToCart( product: any ) {
    const productExistInCart = this.cartProductList
 .find(({name}) => name as any === product.name);
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1});      
      return;
    }
    productExistInCart.num += 1;
  }

  removeProduct(product: any) {
    this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
   }
}
