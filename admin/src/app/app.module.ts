import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDataComponent } from './book-data/book-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortNumberPipe } from './pipes/sort-number.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PaginationBottomComponent } from './pagination-bottom/pagination-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent,
    SortNumberPipe,
    PaginationComponent,
    FilterPipe,
    PaginationBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
