import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../weshop-items/products.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  data: any | undefined;
  id!: string | number | null;

  constructor(private service: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");

      if (this.id) {
        this.service.ViewProduct(this.id).subscribe((pvalue) => {
          this.data = pvalue;
        })
      }
      else {
        this.router.navigate(["/"])
      }
    })
  }

}
