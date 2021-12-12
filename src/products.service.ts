import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product('LIV01', 'Duna', 35),
    new Product('LIV02', 'Fundacao', 20.5),
    new Product('LIV03', 'O Senhor dos aneis', 25),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return { ...this.products[0], id };
  }

  create(product: Product) {
    this.products.push(product);
  }

  update(product: Product): Product {
    return product;
  }

  delete(id: number) {
    this.products.pop();
  }
}
