import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-no-space-example',
    templateUrl: './no-space.component.html',
    styleUrls: ['./no-space.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoSpaceComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
