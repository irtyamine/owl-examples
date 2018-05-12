import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OwlBadgeModule, OwlFormFieldModule, OwlRippleModule, OwlSelectModule } from 'owl-ng';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OwlBadgeModule,
        OwlRippleModule,
        OwlFormFieldModule,
        OwlSelectModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
