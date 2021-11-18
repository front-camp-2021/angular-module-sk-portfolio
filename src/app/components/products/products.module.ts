import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldComponent } from './shared/field/field.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { SearchComponent } from './shared/search/search.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RangeSliderComponent } from './shared/range-slider/range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PaginationLinkComponent } from './shared/pagination-link/pagination-link.component';
import { FilterlistComponent } from './shared/filterlist/filterlist.component';
import { CardlistComponent } from './shared/cardlist/cardlist.component';
import { CardComponent } from './shared/card/card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
const PRODUCTS = [
  PaginationComponent,
  FieldComponent,
  FilterlistComponent,
  SidebarComponent,
  SearchComponent,
  RangeSliderComponent,
  PaginationLinkComponent,
  CardComponent,
  CardlistComponent,
];

@NgModule({
  declarations: [...PRODUCTS],
  imports: [NgxSliderModule, AppRoutingModule, CommonModule, RouterModule],
  exports: [...PRODUCTS],
})
export class ProductsModule {}
