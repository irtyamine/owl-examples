import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';

import { OwlCheckBoxModule, OwlFormFieldModule, OwlInputModule, OwlSliderModule } from 'owl-ng';
import { RangeComponent } from './range/range.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        RangeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlFormFieldModule,
        OwlInputModule,
        OwlCheckBoxModule,
        OwlSliderModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
