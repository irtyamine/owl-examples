import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-customise-example',
    templateUrl: './customise.component.html',
    styleUrls: ['./customise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class CustomiseComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
