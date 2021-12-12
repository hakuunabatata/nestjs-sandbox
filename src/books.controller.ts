import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './books.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAll(): Book[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getOne(@Param() { id }): Book {
    return this.booksService.getOne(id);
  }

  @Post()
  create(@Body() product: Book) {
    this.booksService.create(product);
  }

  @Put()
  update(@Body() product: Book): Book {
    return this.update(product);
  }

  @Delete(':id')
  delete(@Param() { id }) {
    this.booksService.delete(id);
  }
}
