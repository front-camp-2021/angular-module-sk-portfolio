import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './components/field/field.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PaginationLinkComponent } from './components/pagination-link/pagination-link.component';
import { FilterlistComponent } from './components/filterlist/filterlist.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { CardComponent } from './components/card/card.component';
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
]

@NgModule({
  declarations: [
    ...PRODUCTS,
  ],
  imports: [
    NgxSliderModule,
    RouterModule,
    CommonModule
  ],
  exports:[
    ...PRODUCTS,
  ]
})
export class ProductsModule { }
