import {CommonModule, registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import localeDe from '@angular/common/locales/de';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {TokenInterceptor} from './shared/token-interceptor';
import {BooksModule} from './books/books.module';
import {AdminModule} from './admin/admin.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
        {provide: LOCALE_ID, useValue: 'de'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        registerLocaleData(localeDe);
    }
}
