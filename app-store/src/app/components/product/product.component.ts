import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  addCart() {
    console.log('añadir al carrito | product.components');
    this.productClicked.emit(this.product.id);
    console.log(`Emiting value to products.component = [${this.product.id}]`)
  }
}
