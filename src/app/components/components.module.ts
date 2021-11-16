import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './master/app.component';

const COMPONENTS:any = [


]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
