import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-dialog-picker-example',
    templateUrl: './dialog-picker.component.html',
    styleUrls: ['./dialog-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogPickerComponent implements OnInit {

    public color: string;

    constructor() {
    }

    ngOnInit() {
    }

}
