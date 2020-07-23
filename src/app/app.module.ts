import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import localeDe from '@angular/common/locales/de';
import {registerLocaleData} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './shared/token-interceptor';
import {SearchComponent} from './search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DateValueAccessorModule} from 'angular-date-value-accessor';
import {BookFormComponent} from './book-form/book-form.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {FormMessagesComponent} from './form-messages/form-messages.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import { IsbnPipe } from './shared/isbn.pipe';
import { ZoomDirective } from './shared/zoom.directive';
import { DelayDirective } from './shared/delay.directive';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookListItemComponent,
        BookDetailComponent,
        HomeComponent,
        SearchComponent,
        BookFormComponent,
        CreateBookComponent,
        FormMessagesComponent,
        EditBookComponent,
        IsbnPipe,
        ZoomDirective,
        DelayDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        DateValueAccessorModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: LOCALE_ID, useValue: 'de'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        registerLocaleData(localeDe);
    }
}
