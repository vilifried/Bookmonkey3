import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {CreateBookComponent} from './admin/create-book/create-book.component';
import {EditBookComponent} from './admin/edit-book/edit-book.component';

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
    },
    {
        path: 'admin/edit/:isbn',
        component: EditBookComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
