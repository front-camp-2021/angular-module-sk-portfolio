import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/master/app.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './components/products/products.module';
import { CardlistContainerComponent } from './components/cardlist-container/cardlist-container.component';
import { RouterModule } from '@angular/router';
import { SingleProductComponent } from './components/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishlistComponent,
    CartComponent,
    NotFoundComponent,
    CardlistContainerComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ProductsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
