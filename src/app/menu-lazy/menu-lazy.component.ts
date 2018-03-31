import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-menu-lazy-example',
    templateUrl: './menu-lazy.component.html',
    styleUrls: ['./menu-lazy.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuLazyComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
