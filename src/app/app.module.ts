import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { DummyDialogComponent } from './dummy-dialog/dummy-dialog.component';

import {
    OWL_DIALOG_CONFIG,
    OwlDialogModule,
    OwlFormFieldModule,
    OwlInputModule,
    OwlRippleModule
} from 'owl-ng';
import { FlyinAnimationComponent } from './flyin-animation/flyin-animation.component';
import { DialogConfigComponent } from './dialog-config/dialog-config.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        DummyDialogComponent,
        FlyinAnimationComponent,
        DialogConfigComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlDialogModule,
        OwlRippleModule,
        OwlFormFieldModule,
        OwlInputModule,
    ],
    providers: [
        {
            // Global Dialog Config
            // the config would apply to all the dialogs under this module
            provide: OWL_DIALOG_CONFIG, useValue: {
                dialogClass: 'dummy-dialog',
                width: '400px',
            }
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [DummyDialogComponent]
})
export class AppModule {
}
