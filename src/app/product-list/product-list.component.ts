import { Component } from "@angular/core";

// import { products } from "../products";
import { ProductService } from "../services/products.service";
import { Product } from "./product-list.model";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().then(products => {
      this.products = products;
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  share() {
    window.alert("The product has been shared!");
  }
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
