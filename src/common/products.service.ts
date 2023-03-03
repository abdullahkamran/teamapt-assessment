import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/types/Product';

@Injectable()
export class ProductsService {
    productsUrl: string = 'assets/products.json';
    products: Product[] = [];

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(this.productsUrl);
    }
}
