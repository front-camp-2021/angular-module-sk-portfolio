import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FiltersService } from 'src/app/services/filters/filters.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  categories: any = []
  brands: any = []
  private destroy$ = new Subject<void>()

  constructor(private FilterService: FiltersService) { }

  ngOnInit(): void {
    this.getCategories()
    this.getBrands()
  }
  ngOnDestroy(): void{
    this.destroy$.next
    this.destroy$.complete
  }

  getCategories(){
    this.FilterService.getCategories()
    .pipe(takeUntil(this.destroy$))
    .subscribe(categories => this.categories = categories)
  }
  getBrands(){
    this.FilterService.getBrands()
    .pipe(takeUntil(this.destroy$))
    .subscribe(brands => this.brands = brands)
  }


}
