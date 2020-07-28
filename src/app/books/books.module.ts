import {DelayDirective} from './shared/delay.directive';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksRoutingModule} from './books-routing.module';

import {BookDetailComponent} from './book-detail/book-detail.component';
import {IsbnPipe} from './shared/isbn.pipe';
import {ZoomDirective} from './shared/zoom.directive';
import {BookListComponent} from './book-list/book-list.component';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {StoreModule} from '@ngrx/store';
import * as fromBook from './reducers/book.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from './effects/book.effects';

@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        StoreModule.forFeature('book', fromBook.reducer),
        EffectsModule.forFeature([BookEffects])
    ],
    declarations: [
        BookListComponent,
        BookListItemComponent,
        BookDetailComponent,
        IsbnPipe,
        ZoomDirective,
        DelayDirective
    ]
})
export class BooksModule {
}
