import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {  

  constructor(){
    this.products = [];
  }

  @Input() public products: any[];
  @Output() productRemoved = new EventEmitter();
  calcTotal() {
    return this.products.reduce((sum, prod) => sum += prod.num ,0)
  }
  removeProduct(product: any) {
    this.productRemoved.emit(product)
  }
}
