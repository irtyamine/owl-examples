import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { OwlFormFieldModule, OwlInputModule, OwlRippleModule, OwlSelectModule, OwlSweetAlertModule } from 'owl-ng';
import { HtmlContentComponent } from './html-content/html-content.component';
import { InputContentComponent } from './input-content/input-content.component';
import { SelectContentComponent } from './select-content/select-content.component';
import { RadioContentComponent } from './radio-content/radio-content.component';
import { CheckBoxContentComponent } from './check-box-content/check-box-content.component';
import { ImageContentComponent } from './image-content/image-content.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        HtmlContentComponent,
        InputContentComponent,
        SelectContentComponent,
        RadioContentComponent,
        CheckBoxContentComponent,
        ImageContentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlSweetAlertModule,
        OwlFormFieldModule,
        OwlInputModule,
        OwlSelectModule,
        OwlRippleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
