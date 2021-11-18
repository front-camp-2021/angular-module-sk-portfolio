import { Component, Input, OnInit } from '@angular/core';
import { PaginationService } from '../../core/pagination/pagination.service';

@Component({
  selector: 'app-pagination-link',
  templateUrl: './pagination-link.component.html',
  styleUrls: ['./pagination-link.component.scss']
})
export class PaginationLinkComponent implements OnInit {

  @Input() currentPage:number = 1
  @Input() linkNumber:number = 1
  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
  
  }
  setCurrentPageNumber():void{
    this.paginationService.setCurrentPageNumber(this.linkNumber)
  }

}
