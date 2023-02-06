import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../weshop-items/products.service';

@Component({
  selector: 'app-latestproduct',
  templateUrl: './latestproduct.component.html',
  styleUrls: ['./latestproduct.component.css']
})
export class LatestproductComponent implements OnInit {
  id!: string | number | null;
  data: any;
  constructor(private route: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");

      if (this.id) {
        this.service.ViewLatestProduct(this.id).subscribe((pvalue) => {
          this.data = pvalue;
        })
      }
    })
  }

}
