import { Component, OnInit, OnDestroy, DoCheck, Input} from '@angular/core';


@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit, OnDestroy, DoCheck {
   cardlist: any = [];
  searchValue:string = '' 
  filteredProducts:any = []
  searchProducts:any = []
  activeBrandFilters:any = []
  activeCategoriesFilters:any = []
  slidersValues:any 
  sliderStatus = false
  @Input() currentPageProducts:any = []
  findedProducts = 0
  @Input() numberOfPages = 1


  constructor() { }

  ngOnInit(): void {
  
  }
  ngDoCheck(): void {
  }
  ngOnDestroy(): void {

  }


}
