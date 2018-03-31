import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { OWL_NOTIFIER_CONFIG, OwlFormFieldModule, OwlInputModule, OwlNotifierModule, OwlSelectModule } from 'owl-ng';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlNotifierModule,
        OwlFormFieldModule,
        OwlInputModule,
        OwlSelectModule,
    ],
    providers: [
        {
            // Global Notifier Config
            // this config would apply to all notifiers under this module.
            provide: OWL_NOTIFIER_CONFIG, useValue: {
                maxStack: 1,
                life: 0,
                verticalPosition: 'bottom',
                horizontalPosition: 'center',
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
