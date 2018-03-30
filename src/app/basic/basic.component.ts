import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {

    /* Basic Example */
    public basic_checked = false;

    constructor() {
    }

    ngOnInit() {
    }

}
