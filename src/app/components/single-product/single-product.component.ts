import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductStorageService } from '../products/core/product/product-storage.service';
import { Card } from '../products/models/card.interface';
import { ProductsModule } from '../products/products.module';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  card:Card = {
    id:'',
    title:'',
    rating: 0,
    price: 0,
    category:'',
    images:[''],
    brand:''
  } 
  id:string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductService: ProductStorageService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id
    console.log(this.id);
    
    this.getSingleProduct()
 
    
  }


  getSingleProduct(){
    this.ProductService.getSingleProduct(this.id).subscribe(card => {
      return this.card = card[0]})
  }
}
