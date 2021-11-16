import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {NotFoundComponent} from './components/not-found/not-found.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
