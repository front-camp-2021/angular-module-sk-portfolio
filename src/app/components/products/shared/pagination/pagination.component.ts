import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { PaginationService } from '../../core/pagination/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, DoCheck {
  @Input() numberOfPages: number = 1;
  currentPage = 1;
  pagesArr: number[] = [];

  constructor(private PaginationService:PaginationService) {}

  ngOnInit(): void {
    this.setPaginationNumbersArr();
    this.currentPage = this.PaginationService.getCurrentPageNumber()
  }
  ngDoCheck(): void {
    this.setPaginationNumbersArr();
    this.currentPage = this.PaginationService.getCurrentPageNumber()
  }

  setPaginationNumbersArr(): void {
    this.pagesArr = [];

    for (let i: number = 1; i <= this.numberOfPages; i++) {
      this.pagesArr.push(i);
    }
  }
  goToPrevPage():void{
    const prevPageNumber = this.currentPage - 1
    this.PaginationService.setCurrentPageNumber(prevPageNumber)
  }
  goToNextPage():void{
    const nextPageNumber = this.currentPage + 1
    
    this.PaginationService.setCurrentPageNumber(nextPageNumber)
  }
}
