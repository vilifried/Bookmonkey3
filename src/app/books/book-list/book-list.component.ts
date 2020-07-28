import {Component, OnInit} from '@angular/core';
import {Book} from '../../shared/book';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {LoadBooks} from '../actions/book.actions';
import {State} from '../../reducers';
import {getAllBooks, getBooksLoading} from '../selectors/book.selectors';

@Component({
    selector: 'bm-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    books$: Observable<Book[]>;
    loading$: Observable<boolean>;

    constructor(private store: Store<State>) {
    }

    ngOnInit() {
        this.books$ = this.store.pipe(select(getAllBooks));
        this.loading$ = this.store.pipe(select(getBooksLoading));

        this.store.dispatch(new LoadBooks());
    }
}
