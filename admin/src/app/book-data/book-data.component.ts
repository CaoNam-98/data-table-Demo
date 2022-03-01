import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  public listBook!: Book[];
  public iconSortRender: number = 0;
  public iconSortBrowser: number = 0;
  public iconSortPlatform: number = 0;
  public iconSortVersion: number = 0;
  public iconSortGrade: number = 0;
  private subscription !: Subscription;
  public sortValue: number = 0;
  public sortName: string = 'rendering';
  public listBookFollowPage: Book[] = [];
  // Khai báo biến lưu trữ số item được select
  public countItemSelected: Book[] = [];
  public filterName: string = '';
  public countPage!: number;
  public startNumber : number = 1;
  public endNumber : number = 10;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.subscription = this.bookService.getBooks().subscribe(
      (bookData: Book[]) => {
        this.listBook = bookData;
        if (this.listBook.length < 10) {
          this.startNumber = 1;
          this.endNumber = this.listBook.length;
        }
        this.countItemSelected = this.listBook.slice(0, 10);
      },
      (err: any) => console.log(err))
  }

  onHandleSort(value: number, name: string) {
    switch(name) {
      case 'rendering':
        {
          this.sortValue = value;
          this.sortName = name;
          this.iconSortRender = -value;
          this.iconSortBrowser = 0;
          this.iconSortPlatform = 0;
          this.iconSortVersion = 0;
          this.iconSortGrade = 0;
          break;
        }
      case 'browser':
        {
          this.sortValue = value;
          this.sortName = name;
          this.iconSortBrowser = -value;
          this.iconSortRender = 0;
          this.iconSortPlatform = 0;
          this.iconSortVersion = 0;
          this.iconSortGrade = 0;
          break;
        }
      case 'platform':
        {
          this.sortValue = value;
          this.sortName = name;
          this.iconSortPlatform = -value;
          this.iconSortRender = 0;
          this.iconSortBrowser = 0;
          this.iconSortVersion = 0;
          this.iconSortGrade = 0;
          break;
        }
      case 'version':
        {
          this.sortValue = value;
          this.sortName = name;
          this.iconSortVersion = -value;
          this.iconSortRender = 0;
          this.iconSortPlatform = 0;
          this.iconSortBrowser = 0;
          this.iconSortGrade = 0;
          break;
        }
      default:
        {
          this.sortValue = value;
          this.sortName = name;
          this.iconSortGrade = -value;
          this.iconSortRender = 0;
          this.iconSortVersion = 0;
          this.iconSortPlatform = 0;
          this.iconSortBrowser = 0;
        }
    }
  }

  onGetListItemFollowPage(listBookFollowPage: Book[]) {
    this.listBookFollowPage = listBookFollowPage;
  }

  onGetCurrentPage(currentPage: number) {
    this.countPage = Math.ceil(this.listBook.length/10);
    if (currentPage < this.countPage) {
      this.startNumber = currentPage*10 - 9;
      this.endNumber = currentPage*10;
    } else {
      this.startNumber = (currentPage - 1)*10 + 1;
      this.endNumber = this.listBook.length;
    }
  }

  onGetListItemFollowPageBottom(listBookFollowPageBottom: Book[]) {
    this.countItemSelected = listBookFollowPageBottom;
  }

  onChangeShowItem(event: any) {
    if(this.listBook.length <= Number(event.target.value)) {
      this.countItemSelected = this.listBook.slice(0, this.listBook.length);
    } else {
      this.countItemSelected = this.listBook.slice(0, Number(event.target.value));
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
