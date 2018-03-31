import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OwlAccordionModule, OwlRippleModule } from 'owl-ng';
import { BasicComponent } from './basic/basic.component';
import { NoSpaceComponent } from './no-space/no-space.component';
import { MultipleComponent } from './multiple/multiple.component';
import { ProgrammaticControlComponent } from './programmatic-control/programmatic-control.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        NoSpaceComponent,
        MultipleComponent,
        ProgrammaticControlComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlAccordionModule,
        OwlRippleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
