import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {CreateBookComponent} from "./create-book/create-book.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent
  },
  {
    path: 'admin',
    redirectTo: 'admin/create',
    pathMatch: 'full'
  },
  {
    path: 'admin/create',
    component: CreateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
