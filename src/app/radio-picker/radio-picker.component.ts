import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-radio-picker-example',
    templateUrl: './radio-picker.component.html',
    styleUrls: ['./radio-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioPickerComponent implements OnInit {

    public selectedColor = '#e91e63';

    constructor() {
    }

    ngOnInit() {
    }

}
