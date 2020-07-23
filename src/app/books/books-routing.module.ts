import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookListComponent} from './book-list/book-list.component';

const routes: Routes = [
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'books/:isbn',
        component: BookDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class BooksRoutingModule {
}
