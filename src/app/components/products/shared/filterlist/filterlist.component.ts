import { Component,Input, OnInit } from '@angular/core';
import { FiltersService } from '../../core/filters/filters.service';
import { Field } from '../../models/field.interface';


@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.scss']
})

export class FilterlistComponent implements OnInit {

  @Input() categories = [];
  @Input() brands = [];
  checked:boolean = false
  filtersState:Field[] = []

  constructor(private FiltersService: FiltersService) { }

  ngOnInit(): void {
    this.filtersState = this.FiltersService.getFieldsState()
    
  }
  ngDoCheck(): void {
    this.filtersState = this.FiltersService.getFieldsState()
  }

}
