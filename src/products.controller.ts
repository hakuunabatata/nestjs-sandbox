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
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param() { id }): Product {
    return this.productService.getOne(id);
  }

  @Post()
  create(@Body() product: Product) {
    this.productService.create(product);
  }

  @Put()
  update(@Body() product: Product): Product {
    return this.update(product);
  }

  @Delete(':id')
  delete(@Param() { id }) {
    this.productService.delete(id);
  }
}
