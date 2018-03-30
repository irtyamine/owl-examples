import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-multi-value-example',
    templateUrl: './multi-value.component.html',
    styleUrls: ['./multi-value.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiValueComponent implements OnInit {

    /* Select Multiple Value Example */
    public selectedDramas: string[];

    constructor() {
    }

    ngOnInit() {
    }

}
