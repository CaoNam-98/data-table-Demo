import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-pagination-bottom',
  templateUrl: './pagination-bottom.component.html',
  styleUrls: ['./pagination-bottom.component.css']
})
export class PaginationBottomComponent implements OnInit, OnChanges {

  @Input() listBook!: Book[];
  @Input() countItemSelected : Book[] = [];
  @Output() onHandlePagination = new EventEmitter<Book[]>();
  public currentPage: number = 1;
  public listItemFollowPage: Book[] = [];
  public countPage!: number;
  public totalPage: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.totalPage = [];
    this.countPage = Math.ceil(this.listBook.length/this.countItemSelected.length);
    // console.log(this.countPage);
    // // Check lại chỗ này
    // interval(1000)
    //   .pipe(take(this.countPage))
    //   .subscribe(obs => this.totalPage.push(obs));

    // this.listItemFollowPage = this.listBook.slice(0, this.countItemSelected.length);
    // this.onHandlePagination.emit(this.listItemFollowPage);
  }

  onHandlePage(currentNumberPage: number) {
    if (currentNumberPage >= 1 && currentNumberPage <= Math.ceil(this.listBook.length/this.countItemSelected.length)) {
      this.currentPage = currentNumberPage;
      this.listItemFollowPage = this.listBook.slice(this.currentPage*this.countItemSelected.length - this.countItemSelected.length, this.currentPage*this.countItemSelected.length);
      this.onHandlePagination.emit(this.listItemFollowPage);
    }
  }

  setClasses() {
    return {
      'disabled': this.currentPage === this.countPage
    }
  }
}
