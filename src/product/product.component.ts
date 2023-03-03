import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/common/products.service';
import { Product } from 'src/types/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  id: string | null = null;
  product?: Product;
  selectedImage?: string;
  images = [];
  products: Product[] = [];
  imageClasses = {
    fadeOut: false,
    fadeIn: false,
  };
  reviews = [
    {
      name: "John D*e",
      rating: "5.0",
      review: "According to my expectations. This is the best. Thank you.",
      chips: ["Very fast delivery", "Good quality", "Good price"]
    },
    {
      name: "Jane D*e",
      rating: "4.0",
      review: "According to my expectations. This is the best. Thank you.",
      chips: ["Very fast delivery", "Good quality", "Good price"]
    },
    {
      name: "Joe",
      rating : "3.0",
      review: "According to my expectations. This is the best. Thank you.",
      chips: ["Very fast delivery", "Good quality", "Good price"],
    }
  ];
  routeSubscription?: Subscription;

  animInterval: ReturnType<typeof setTimeout> | null = null;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}
  ngOnInit(): void {

    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.productsService.getProducts().subscribe((data: Product[]) => {
        this.products = data;
        this.product = data.find((product: Product) => product.id === this.id);
        this.selectedImage = this.product?.images[0];
      });
    });

    this.imageClasses = {
      fadeOut: false,
      fadeIn: false,
    };
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  tileClicked(tile: string) {
    if (tile !== this.selectedImage && !this.animInterval) {      
      this.imageClasses = { ...this.imageClasses, fadeOut: true};
      this.animInterval = setTimeout(() => {
        this.selectedImage = tile;
        this.imageClasses = { ...this.imageClasses, fadeOut: false};
        this.imageClasses = { ...this.imageClasses, fadeIn: true };
        setTimeout(() => {
          this.animInterval = null;
        }, 150);  
      }, 150);
    }
  }
}
