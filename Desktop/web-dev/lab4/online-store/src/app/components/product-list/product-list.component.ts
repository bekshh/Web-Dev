import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
  
})
export class ProductListComponent {
products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro 512GB',
    description: 'Apple flagship smartphone with A17 Pro chip and titanium body.',
    price: 649000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h4f/86302542331934.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-512gb-seryi-113138214/?c=750000000'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 256GB',
    description: 'Samsung premium smartphone with powerful Snapdragon processor.',
    price: 579000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p2d/pd9/24809545.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-128-gb-chernyi-podarok-134698302/?c=750000000'
  },
  {
    id: 3,
    name: 'Xiaomi 13T Pro',
    description: 'High-performance Xiaomi smartphone with AMOLED display.',
    price: 349000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000'
  },
  {
    id: 4,
    name: 'MacBook Air M2',
    description: 'Lightweight Apple laptop with M2 chip and Retina display.',
    price: 699000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=750000000'
  },
  {
    id: 5,
    name: 'PlayStation 5',
    description: 'Next-gen gaming console from Sony.',
    price: 329000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
  },
  {
    id: 6,
    name: 'Dyson V15 Vacuum Cleaner',
    description: 'Powerful cordless vacuum cleaner with laser detection.',
    price: 399000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
  },
  {
    id: 7,
    name: 'Apple Watch Series 9',
    description: 'Smartwatch with advanced health monitoring.',
    price: 229000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000'
  },
  {
    id: 8,
    name: 'iPad Air 5',
    description: 'Powerful tablet with M1 chip.',
    price: 399000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/?c=750000000'
  },
  {
    id: 9,
    name: 'Sony WH-1000XM5',
    description: 'Noise-cancelling wireless headphones.',
    price: 199000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
  },
  {
    id: 10,
    name: 'LG OLED C3 55"',
    description: 'Premium 4K OLED television.',
    price: 799000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p59/107023507.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/lg-55nano80a6b-140-sm-chernyi-138848836/?c=750000000'
  },
  {
    id: 11,
    name: 'Fresh Fruits Box',
    description: '',
    price: 12900,
    rating: 4.6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0D7pFw-nyG0ko1Tu2BEj2cda39HJ9i3LeA&s',
    images: [
    ],
    link: 'https://kaspi.kz/shop/'
  }
  
];
}
