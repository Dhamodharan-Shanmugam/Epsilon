import { Component, OnInit } from '@angular/core';
import { Product } from './interface/product.interface';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-table-functions',
  templateUrl: './table-functions.component.html',
  styleUrls: ['./table-functions.component.less']
})
export class TableFunctionsComponent implements OnInit {

  products: Product[] = [];
  order: boolean = true;
  sortByRow:string= "";

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(products => {
      if (products && products.cookies && products.cookies.length) {
        this.products = products.cookies;
      }
    })
  }

  trackItem(index: number, products: Product) {
    return products.name;
  }


  sortproduct(sortBy: string, ascendingorder: boolean) {
    this.order = ascendingorder;
    this.sortByRow = sortBy;
    this.products = this.products.sort((x: Product, y: Product): any => {
      if (sortBy === "name" || sortBy === "price" || sortBy === "category") {
        return ascendingorder ? (x[sortBy] < y[sortBy] ? 1 : -1) : (x[sortBy] > y[sortBy] ? 1 : -1)
      }
    });
  }

  dummy() {
    console.log("called");
  }
}
