import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/common/products.service';
import { Product } from 'src/types/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  carouselImages: string[] = [
    "assets/images/carousel-1.png",
    "assets/images/carousel-2.png",
  ];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });

    document.onscroll = () => {
      const nav = document.querySelector('nav');
      nav?.classList.toggle('scrolled', document.documentElement.scrollTop > nav!.clientHeight);
    }
  }
}
