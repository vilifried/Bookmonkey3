import {Injectable} from '@angular/core';
import {Book} from "./book";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {BookRaw} from "./book-raw";
import {BookFactory} from "./book-factory";
import {catchError, map, retry} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class BookStoreService {
    private api = 'https://api3.angular-buch.com/secure' +
        '';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Book[]> {
        return this.http.get<BookRaw[]>(`${this.api}/books`)
            .pipe(
                retry(3),
                map(booksRaw =>
                    booksRaw.map(b => BookFactory.fromRaw(b)),
                ),
                catchError(this.errorHandler)
            );
    }

    getAllSearch(searchTerm: String): Observable<Book[]> {
        return this.http.get<BookRaw[]>(
            `${this.api}/books/search/${searchTerm}`
        ).pipe(
            retry(3),
            map(booksRaw =>
                booksRaw.map(b => BookFactory.fromRaw(b)),
            ),
            catchError(this.errorHandler)
        );
    }

    getSingle(isbn: string): Observable<Book> {
        return this.http.get<BookRaw>(
            `${this.api}/book/${isbn}`).pipe(
            retry(3),
            catchError(this.errorHandler),
            map(b => BookFactory.fromRaw(b))
        );
    }

    remove(isbn: string): Observable<any> {
        return this.http.delete(
            `${this.api}/book/${isbn}`,
            {responseType: 'text'}
        ).pipe(
            catchError(this.errorHandler)
        );
    }

    create(book: Book): Observable<any> {
        return this.http.post(
            `${this.api}/book`,
            book,
            { responseType: 'text' }
        ).pipe(
            catchError(this.errorHandler)
        );
    }

    private errorHandler(error: HttpErrorResponse): Observable<any> {
        console.error('Fehler aufgetreten!');
        return throwError(error);
    }
}
