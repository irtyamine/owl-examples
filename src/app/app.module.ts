import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';

import { OwlColorPickerModule } from 'owl-ng';
import { DialogPickerComponent } from './dialog-picker/dialog-picker.component';
import { RadioPickerComponent } from './radio-picker/radio-picker.component';
import { InlinePickerComponent } from './inline-picker/inline-picker.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        DialogPickerComponent,
        RadioPickerComponent,
        InlinePickerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlColorPickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
