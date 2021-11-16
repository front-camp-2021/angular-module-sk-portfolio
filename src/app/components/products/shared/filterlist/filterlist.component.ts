import { Component,Input, OnInit } from '@angular/core';
import { FiltersService } from '../../core/filters/filters.service';


@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.scss']
})

export class FilterlistComponent implements OnInit {

  @Input() categories = [];
  @Input() brands = [];
  checked:boolean = false
  filtersState:any = []

  constructor(private FiltersService: FiltersService) { }

  ngOnInit(): void {
    this.filtersState = this.FiltersService.getFieldsState()
    
  }
  ngDoCheck(): void {
    this.filtersState = this.FiltersService.getFieldsState()
    
  }

}
