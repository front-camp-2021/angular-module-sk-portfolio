import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.scss']
})

export class FilterlistComponent implements OnInit {

  @Input() categories = [];
  @Input() brands = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
