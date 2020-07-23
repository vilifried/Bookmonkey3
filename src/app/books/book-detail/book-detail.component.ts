import {Component, OnInit} from '@angular/core';
import {Book} from "../../shared/book";
import {BookStoreService} from "../../shared/book-store.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'bm-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    book: Book;

    constructor(
        private bs: BookStoreService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        const params = this.route.snapshot.paramMap;
        this.bs.getSingle(params.get('isbn'))
            .subscribe(b => this.book = b);
    }

    getRating(num: number) {
        return new Array(num);
    }

    removeBook() {
        if (confirm('Buch wirklich löschen?')) {
            this.bs.remove(this.book.isbn)
                .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
        }
    }
}
