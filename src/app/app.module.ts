import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';

import { OwlFormFieldModule, OwlInputModule } from 'owl-ng';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { PrefixSuffixComponent } from './prefix-suffix/prefix-suffix.component';
import { HintsComponent } from './hints/hints.component';
import { CustomiseComponent } from './customise/customise.component';
import { CustomiseErrorMatcherComponent } from './customise-error-matcher/customise-error-matcher.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        ErrorMsgComponent,
        PrefixSuffixComponent,
        HintsComponent,
        CustomiseComponent,
        CustomiseErrorMatcherComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,

        OwlInputModule,
        OwlFormFieldModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
