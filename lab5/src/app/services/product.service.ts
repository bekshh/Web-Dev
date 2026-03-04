import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' },
  {id: 5,name: 'Macbooks'}
];
private products: Product[] = [

  // SMARTPHONES
  {
    id: 1,
    name: 'iPhone 15 Pro',
    description: 'Latest Apple smartphone',
    price: 550000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/h35/86302552031262.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-nanosim-esim-sinii-113138344/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    description: 'Flagship Samsung smartphone',
    price: 520000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 3,
    name: 'Xiaomi 13 Pro',
    description: 'Powerful Xiaomi phone',
    price: 420000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 4,
    name: 'Google Pixel 8',
    description: 'Google flagship smartphone',
    price: 480000,
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqpjoWctaPy1b0145iA4brdcNqacYiFbuQw&s',
    link: 'https://kaspi.kz/shop/p/google-pixel-8-256gb-114090884/',
    likes: 0,
    categoryId: 1
  },
  {
    id: 5,
    name: 'OnePlus 11',
    description: 'Fast Android smartphone',
    price: 390000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h57/82828181864478.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/oneplus-11-16-gb-512-gb-zolotistyi-112551457/?c=750000000',
    likes: 0,
    categoryId: 1
  },

  // LAPTOPS
  {
    id: 6,
    name: 'MacBook Air M2',
    description: 'Apple lightweight laptop',
    price: 650000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: 'MacBook Pro M3',
    description: 'Powerful Apple laptop',
    price: 950000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/p89/17666424.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2u3ru-a-132088460/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: 'ASUS ROG Strix',
    description: 'Gaming laptop',
    price: 720000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/pfa/59686305.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g18-g815jpr-s9042-18-32-gb-m-2-1024-gb-bez-os-90nr0lm1-m001z0-144391824/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 9,
    name: 'Lenovo ThinkPad X1',
    description: 'Business laptop',
    price: 680000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/pb4/55821876.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-g13-14-16-gb-ssd-512-gb-win-11-pro-21nx00f1fw-143298598/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 10,
    name: 'Dell XPS 13',
    description: 'Compact premium laptop',
    price: 700000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p2c/43905749.jpeg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/dell-xps-13-9345-13-4-16-gb-ssd-512-gb-win-11-210-bmtr-140113298/?c=750000000',
    likes: 0,
    categoryId: 2
  },

  // HEADPHONES
  {
    id: 11,
    name: 'Sony WH-1000XM5',
    description: 'Noise cancelling headphones',
    price: 180000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 12,
    name: 'AirPods Pro 2',
    description: 'Apple wireless earbuds',
    price: 160000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 13,
    name: 'Samsung Buds2 Pro',
    description: 'Samsung wireless earbuds',
    price: 120000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/p13/115245220.png?format=preview-large',
    link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds4-pro-belyi-159681612/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 14,
    name: 'JBL Tune 760NC',
    description: 'Affordable headphones',
    price: 65000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/h59/65946406486046.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-760nc-sinii-107383615/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 15,
    name: 'Marshall Major IV',
    description: 'Stylish headphones',
    price: 90000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=preview-large',
    link: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=preview-large',
    likes: 0,
    categoryId: 3
  },

  // TABLETS
  {
    id: 16,
    name: 'iPad Pro',
    description: 'Apple tablet',
    price: 520000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 17,
    name: 'Samsung Galaxy Tab S9',
    description: 'Samsung flagship tablet',
    price: 480000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 18,
    name: 'Xiaomi Pad 6',
    description: 'Affordable tablet',
    price: 220000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pec/p1e/30098871.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-pad-6-11-djuim-8-gb-256-gb-seryi-136299890/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 19,
    name: 'Lenovo Tab P11',
    description: 'Android tablet',
    price: 190000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hdb/79994503921694.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-plus-tb-j616f-za940326ru-11-djuim-4-gb-128-gb-seryi-109848413/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 20,
    name: 'Huawei MatePad 11',
    description: 'Huawei tablet',
    price: 240000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 21,
    name: 'MacBook Air M2',
    description: 'Apple lightweight laptop',
    price: 650000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000',
    likes: 0,
    categoryId: 5
  },
  {
    id: 22,
    name: 'MacBook Pro M3',
    description: 'Powerful Apple laptop',
    price: 950000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/p89/17666424.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2u3ru-a-132088460/?c=750000000',
    likes: 0,
    categoryId: 5
  },
  
];
getCategories(): Category[] {
  return this.categories;
}

getProductsByCategory(categoryId: number): Product[] {
  return this.products.filter(p => p.categoryId === categoryId);
}
  constructor() { }
}
