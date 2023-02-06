import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  ProductList() {
    return this.http.get<any>("https://fakestoreapi.com/products");
  }

  ViewProduct(id: string | number) {
    return this.http.get<any>("https://fakestoreapi.com/products/" + id);
  }

  LatestProduct() {
    return this.http.get<any>("https://dummyjson.com/products");
  }

  ViewLatestProduct(id: string | number) {
    return this.http.get<any>("https://dummyjson.com/products/" + id);
  }
}
