import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OwlCheckBoxModule } from 'owl-ng';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { MultiValueComponent } from './multi-value/multi-value.component';
import { PreselectionComponent } from './preselection/preselection.component';
import { IndeterminateComponent } from './indeterminate/indeterminate.component';
import { DisableChkboxComponent } from './disable-chkbox/disable-chkbox.component';
import { CustomiseComponent } from './customise/customise.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        MultiValueComponent,
        PreselectionComponent,
        IndeterminateComponent,
        DisableChkboxComponent,
        CustomiseComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlCheckBoxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
