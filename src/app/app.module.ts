import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { OwlRadioModule } from 'owl-ng';
import { PreselectionComponent } from './preselection/preselection.component';
import { DisableBtnComponent } from './disable-btn/disable-btn.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        PreselectionComponent,
        DisableBtnComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlRadioModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
