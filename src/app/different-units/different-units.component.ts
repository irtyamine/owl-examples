import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-different-units-example',
    templateUrl: './different-units.component.html',
    styleUrls: ['./different-units.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DifferentUnitsComponent implements OnInit {

    public timerDays = 1;
    public timerHours = 2;
    public timerMinutes = 3;
    public timerSeconds = 4;

    constructor() {
    }

    ngOnInit() {
    }

}
