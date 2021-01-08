import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent{

  @Input() product: any;
  @Output() productRemoved = new EventEmitter();
  modelChanged(product: any) {
    if (this.product.num as any === 0) {
     this.productRemoved.emit(this.product)
    }
 }
}

