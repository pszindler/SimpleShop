import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductaddComponent } from '../productadd/productadd.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(){
    this.products = [];
  }     

    @Input() products: any[];  
    @Output() productAdded = new EventEmitter();
  
    addProductToCart(product: any) {
    this.productAdded.emit(product);
  }
  }

