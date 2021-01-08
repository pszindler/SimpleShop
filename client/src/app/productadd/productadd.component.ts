import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent {

  constructor(){
    this.product = [];
  }

  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  
  addProductToCart(product: any) {
    this.productAdded.emit(product);
  }

}
