import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OwlFormFieldModule, OwlInputMaskModule, OwlInputModule } from 'owl-ng';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlFormFieldModule,
        OwlInputModule,
        OwlInputMaskModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
