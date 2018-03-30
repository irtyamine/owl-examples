import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-disable-chkbox-example',
    templateUrl: './disable-chkbox.component.html',
    styleUrls: ['./disable-chkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisableChkboxComponent implements OnInit {

    public chkbox_value = false;

    public chkbox_disable = false;

    constructor() {
    }

    ngOnInit() {
    }

}
