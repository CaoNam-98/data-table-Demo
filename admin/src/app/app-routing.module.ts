import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDataComponent } from './book-data/book-data.component';

const routes: Routes = [
  { path: 'books', component: BookDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
