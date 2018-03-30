import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-disable-btn-example',
    templateUrl: './disable-btn.component.html',
    styleUrls: ['./disable-btn.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisableBtnComponent implements OnInit {

    public selectedBrand: string;

    constructor() {
    }

    ngOnInit() {
    }

}
