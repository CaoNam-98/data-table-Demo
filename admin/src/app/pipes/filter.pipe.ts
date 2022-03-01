import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // Chưa xét trường hợp nhập vào là kiểu number
  transform(listBook: Book[], filterName: string): Book[] {
    let listItemAfterFilter: Book[] = [];
    for (let i = 0; i < listBook.length; i++) {
      for(let value of Object.values(listBook[i])) {
        if (String(value).indexOf(filterName) !== -1) {
          listItemAfterFilter.push(listBook[i]);
          break;
        }
      }
    }
    return listItemAfterFilter;
  }
}
