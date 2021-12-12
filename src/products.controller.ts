import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'Produtos';
  }

  @Get(':id')
  getOne(@Param() { id }): string {
    return `Product ${id}`;
  }

  @Post()
  create(@Body() product): string {
    console.log(product);
    return 'Created!';
  }

  @Put()
  update(@Body() product): string {
    console.log(product);
    return 'Updated!';
  }

  @Delete(':id')
  delete(@Param() { id }): string {
    return `Delete ${id}!`;
  }
}
