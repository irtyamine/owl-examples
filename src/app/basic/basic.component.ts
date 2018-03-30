import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {

    public timerDays = 1;
    public timerHours = 2;
    public timerMinutes = 3;
    public timerSeconds = 4;

    constructor() {
    }

    ngOnInit() {
    }

}
