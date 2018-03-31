import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-menu-nested-example',
    templateUrl: './menu-nested.component.html',
    styleUrls: ['./menu-nested.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuNestedComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
