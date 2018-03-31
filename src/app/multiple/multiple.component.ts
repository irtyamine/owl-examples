import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-multiple-example',
    templateUrl: './multiple.component.html',
    styleUrls: ['./multiple.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
