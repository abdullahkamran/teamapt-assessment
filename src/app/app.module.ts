import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from 'src/card/card.component';
import { CardListComponent } from 'src/card-list/card-list.component';

import { ProductsService } from 'src/common/products.service';
import { ProductComponent } from 'src/product/product.component';
import { RatingsComponent } from 'src/ratings/ratings.component';
import { HomeComponent } from 'src/home/home.component';
import { TabsComponent } from 'src/tabs/tabs.component';
import { NavComponent } from 'src/nav/nav.component';
import { ProductNavComponent } from 'src/product-nav/product-nav.component';
import { ProductFooterComponent } from 'src/product-footer/product-footer.component';
import { SellerCardComponent } from 'src/seller-card/seller-card.component';
import { UserReviewsComponent } from 'src/user-reviews/user-reviews.component';
import { CarouselComponent } from 'src/carousel/carousel.component'
import { PillsComponent } from 'src/pills/pills.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    HomeComponent,
    ProductComponent,
    RatingsComponent,
    TabsComponent,
    NavComponent,
    ProductNavComponent,
    ProductFooterComponent,
    SellerCardComponent,
    UserReviewsComponent,
    CarouselComponent,
    PillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
