import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './master/app.component';
import { AppRoutingModule } from '../app-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { SingleProductComponent } from './single-product/single-product.component';

const COMPONENTS:any = [

]

@NgModule({
  declarations: [
    ...COMPONENTS,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    AppRoutingModule,
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
