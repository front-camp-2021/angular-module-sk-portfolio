import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';

import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './components/master/app.component';

import {NotFoundComponent} from './components/not-found/not-found.component'
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import {WishlistComponent} from './components/wishlist/wishlist.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './components/products/products.module';
import { CardlistContainerComponent } from './components/products/components/cardlist-container/cardlist-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishlistComponent,
    CartComponent,
    NotFoundComponent,
    CardlistContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ProductsModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
