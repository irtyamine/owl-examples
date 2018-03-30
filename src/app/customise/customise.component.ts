import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-customise-example',
    templateUrl: './customise.component.html',
    styleUrls: ['./customise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomiseComponent implements OnInit {

    public chkbox_value = false;

    constructor() {
    }

    ngOnInit() {
    }
}
