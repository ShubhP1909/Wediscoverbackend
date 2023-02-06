import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-weshop-items',
  templateUrl: './weshop-items.component.html',
  styleUrls: ['./weshop-items.component.css']
})
export class WeshopItemsComponent implements OnInit {

  products: any;
  LProducts: any;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {

    this.service.ProductList().subscribe({
      next: res => this.products = res,
      error: err => console.log(err)
    })

    this.service.LatestProduct().subscribe({
      next: res => this.LProducts = res.products,
      error: err => console.log(err)
    })
  }


}
