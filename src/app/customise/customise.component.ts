import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-customise-example',
    templateUrl: './customise.component.html',
    styleUrls: ['./customise.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomiseComponent implements OnInit {

    public panelColor = new FormControl('red');

    constructor() {
    }

    ngOnInit() {
    }

}
