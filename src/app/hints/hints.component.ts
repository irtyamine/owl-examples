import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-hints-example',
    templateUrl: './hints.component.html',
    styleUrls: ['./hints.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
