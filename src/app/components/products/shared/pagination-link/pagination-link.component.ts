import { Component, Input } from '@angular/core';
import { PaginationService } from '../../core/pagination/pagination.service';

@Component({
  selector: 'app-pagination-link',
  templateUrl: './pagination-link.component.html',
  styleUrls: ['./pagination-link.component.scss'],
})
export class PaginationLinkComponent {
  @Input() currentPage: number = 1;
  @Input() linkNumber: number = 1;
  constructor(private paginationService: PaginationService) {}
  setCurrentPageNumber(): void {
    this.paginationService.setCurrentPageNumber(this.linkNumber);
  }
}
