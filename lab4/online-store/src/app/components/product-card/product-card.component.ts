import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  shareProduct() {
    const url = this.product.link;
    const text = `Check out this product: ${this.product.name}`;
    
    const shareUrl =
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  
    window.open(shareUrl, '_blank');
  }

}
