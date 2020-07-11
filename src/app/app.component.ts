import {Component} from '@angular/core';
import {Book} from "./shared/book";

type ViewState = 'list' | 'details';

@Component({
    selector: 'bm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    book: Book; // @Output Property from book-list-component
    viewState: ViewState = 'list';
    title = 'Bookmonkey';

    showList() {
        this.viewState = 'list';
    }

    showDetails(book: Book) {
        this.book = book;
        this.viewState = 'details';
    }
}
