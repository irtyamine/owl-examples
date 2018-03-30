import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { DifferentUnitsComponent } from './different-units/different-units.component';
import { ControlTimerComponent } from './control-timer/control-timer.component';

import { OwlRippleModule, OwlTimerModule } from 'owl-ng';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        DifferentUnitsComponent,
        ControlTimerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlTimerModule,
        OwlRippleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
