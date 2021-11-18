import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductStorageService } from '../products/core/product/product-storage.service';
import { Card } from '../products/models/card.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit, OnDestroy {
  card: Card = {
    id: '',
    title: '',
    rating: 0,
    price: 0,
    category: '',
    images: [''],
    brand: '',
    isCart: false,
    isWished: false,
    uniqId: 0
  };
  id: string = '';
  private destroy$ = new Subject<void>();
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductStorageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.destroy$))
    .subscribe((params) => (this.id = params.id));


    this.getSingleProduct();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getSingleProduct() {
    this.productService.getSingleProduct(this.id)
    .pipe(takeUntil(this.destroy$))
    .subscribe((card) => {
      return (this.card = card[0]);
    });
  }
}
