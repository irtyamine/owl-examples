import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { MenuPositionComponent } from './menu-position/menu-position.component';

import { OwlCheckBoxModule, OwlMenuModule } from 'owl-ng';
import { MenuNestedComponent } from './menu-nested/menu-nested.component';
import { MenuLazyComponent } from './menu-lazy/menu-lazy.component';
import { MenuDataComponent } from './menu-data/menu-data.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        MenuPositionComponent,
        MenuNestedComponent,
        MenuLazyComponent,
        MenuDataComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlMenuModule,
        OwlCheckBoxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
