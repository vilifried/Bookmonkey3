import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../shared/book";

@Component({
    selector: 'bm-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    @Input() book: Book;
    @Output() showListEvent = new EventEmitter<any>();

    getRating(num: number) {
        return new Array(num);
    }

    showBookList() {
        this.showListEvent.emit();
    }

    ngOnInit(): void {
    }
}
