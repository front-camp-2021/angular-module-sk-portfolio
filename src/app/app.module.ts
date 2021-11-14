import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumpsComponent } from './components/breadcrumps/breadcrumps.component';
import { CardComponent } from './components/card/card.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { FieldComponent } from './components/field/field.component';
import { FilterlistComponent } from './components/filterlist/filterlist.component';
import { HomeComponent } from './components/home/home.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PaginationLinkComponent } from './components/pagination-link/pagination-link.component';
import { WishlistComponent } from './components/wishlist/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardlistComponent,
    CardComponent,
    PaginationComponent,
    FieldComponent,
    FilterlistComponent,
    SidebarComponent,
    SearchComponent,
    BreadcrumpsComponent,
    RangeSliderComponent,
    PaginationLinkComponent,
    WishlistComponent,
    CartComponent,
    NotFoundComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
