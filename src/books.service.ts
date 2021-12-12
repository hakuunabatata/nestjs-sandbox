import { Injectable } from '@nestjs/common';
import { Book } from './books.model';

@Injectable()
export class BooksService {
  books: Book[] = [
    new Book('LIV01', 'Duna', 35),
    new Book('LIV02', 'Fundacao', 20.5),
    new Book('LIV03', 'O Senhor dos aneis', 25),
  ];

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
    return { ...this.books[0], id };
  }

  create(book: Book) {
    this.books.push(book);
  }

  update(book: Book): Book {
    return book;
  }

  delete(id: number) {
    this.books.pop();
  }
}
