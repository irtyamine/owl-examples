import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-menu-data-example',
    templateUrl: './menu-data.component.html',
    styleUrls: ['./menu-data.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDataComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
