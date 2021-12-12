import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('LIV01', 'Duna', 35),
    new Product('LIV02', 'Fundacao', 20.5),
    new Product('LIV03', 'O Senhor dos aneis', 25),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param() { id }): Product {
    return { ...this.products[0], id };
  }

  @Post()
  create(@Body() product: Product) {
    this.products.push(product);
  }

  @Put()
  update(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  delete(@Param() { id }) {
    this.products.pop();
  }
}
