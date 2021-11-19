import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { RouterModule } from '@angular/router';
const SHARED = [
  BreadcrumpsComponent,
  HeaderComponent,
]


@NgModule({
  declarations: [
    ...SHARED
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ...SHARED
  ]
})
export class SharedModule { }
