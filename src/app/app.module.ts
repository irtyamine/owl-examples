import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { OwlChipsModule, OwlFormFieldModule } from 'owl-ng';
import { InputChipsComponent } from './input-chips/input-chips.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        InputChipsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlChipsModule,
        OwlFormFieldModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
