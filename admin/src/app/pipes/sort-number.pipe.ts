import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(listBook: Book[], sortValue: number, sortName: string): Book[] {
    listBook.sort((a: any, b: any) => {
      if (a[sortName] > b[sortName]) return sortValue;
      else if (a[sortName] < b[sortName]) return -sortValue;
      else return 0;
    })
    return [...listBook];
  }
}
