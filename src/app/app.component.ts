import { Component } from '@angular/core';
import { ProductModel } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-test';

  productList: ProductModel[] = [
    {
      url: 'assets/images/Image-Master.png',
      price: 129.99,
      category: 'Burberry',
      name: 'Flowy Dress with pink and gold',
      rental: 12.00,
      size: 4
    },
    {
      url: 'assets/images/Image-Master-2.png',
      price: 129.99,
      category: 'Prada',
      name: 'Beach dress',
      rental: 12.00,
      size: 8
    },
    {
      url: 'assets/images/Image-Master-1.png',
      price: 129.99,
      category: 'Bhandage',
      name: 'Red dress for evening wear',
      rental: 12.00,
      size: 12
    },
    {
      url: 'assets/images/Image-Master-3.png',
      price: 129.99,
      category: 'Prada',
      name: 'Wedding guest',
      rental: 12.00,
      size: 12
    },
    {
      url: 'assets/images/Image-Master-4.png',
      price: 129.99,
      category: 'Ansell',
      name: 'Nightwear',
      rental: 12.00,
      size: 14
    },
    {
      url: 'assets/images/Image-Master-5.png',
      price: 129.99,
      category: 'Desacada',
      name: 'Summer dress',
      rental: 12.00,
      size: 8
    }
  ]
}
