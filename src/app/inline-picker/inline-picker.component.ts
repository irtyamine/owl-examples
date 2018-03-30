import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-inline-picker-example',
    templateUrl: './inline-picker.component.html',
    styleUrls: ['./inline-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlinePickerComponent implements OnInit {

    public color: string;

    constructor() {
    }

    ngOnInit() {
    }
}
