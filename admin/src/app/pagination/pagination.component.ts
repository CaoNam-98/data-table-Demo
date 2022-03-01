import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../models/book';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() listBook!: Book[];
  @Input() countItemSelected : Book[] = [];
  @Output() onHandlePagination = new EventEmitter<Book[]>();
  @Output() onHandlePaginationBottom = new EventEmitter<Book[]>();
  @Output() onHandleCurrentPage = new EventEmitter<number>();

  public currentPage: number = 1;
  public listBookOfPage!: Book[];
  public totalPage: number[] = [];
  public countPage!: number;
  public countPageBottom!: number;
  public totalPageBottom: number[] = [];
  // Khai báo biến lưu trữ các item theo pagination
  public listItemFollowPage: Book[] = [];
  public listItemFollowPageBottom: Book[] = [];

  constructor() { }

  ngOnInit(): void {
    this.countPage = Math.ceil(this.listBook.length/10);
    interval(100)
      .pipe(take(this.countPage))
      .subscribe(obs => this.totalPage.push(obs));

    this.listItemFollowPage = this.listBook.slice(0, this.currentPage*10);
    this.onHandlePagination.emit(this.listItemFollowPage);
  }

  onHandlePage(currentNumberPage: number) {
    if (currentNumberPage >= 1 && currentNumberPage <= Math.ceil(this.listBook.length/10)) {
      this.currentPage = currentNumberPage;
      this.listItemFollowPage = this.listBook.slice(this.currentPage*10 - 10, this.currentPage*10);
      this.onHandlePagination.emit(this.listItemFollowPage);
      this.onHandleCurrentPage.emit(this.currentPage);
      console.log(this.currentPage);
    }
  }

  setClasses() {
    return {
      'disabled': this.currentPage === this.countPage
    }
  }
}
