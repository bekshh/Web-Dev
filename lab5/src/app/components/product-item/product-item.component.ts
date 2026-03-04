import { Component } from '@angular/core';
import { input, output } from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
product = input.required<Product>();
delete = output<number>();

like() {
  this.product().likes++;
}

remove() {
  this.delete.emit(this.product().id);
}
share() {
  const url = this.product().link;
  window.open(`https://wa.me/?text=${url}`, '_blank');
}

}
