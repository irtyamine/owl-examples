import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';

import { OwlFormFieldModule, OwlSelectModule } from 'owl-ng';
import { MultipleComponent } from './multiple/multiple.component';
import { MultipleLimitComponent } from './multiple-limit/multiple-limit.component';
import { GroupComponent } from './group/group.component';
import { DisableOptionComponent } from './disable-option/disable-option.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObjectOptionComponent } from './object-option/object-option.component';
import { CustomiseComponent } from './customise/customise.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        MultipleComponent,
        MultipleLimitComponent,
        GroupComponent,
        DisableOptionComponent,
        ReactiveFormComponent,
        ObjectOptionComponent,
        CustomiseComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,

        OwlFormFieldModule,
        OwlSelectModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
