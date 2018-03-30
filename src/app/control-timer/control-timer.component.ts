import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-control-timer-example',
    templateUrl: './control-timer.component.html',
    styleUrls: ['./control-timer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlTimerComponent implements OnInit {

    public timerDays = 1;
    public timerHours = 2;
    public timerMinutes = 3;
    public timerSeconds = 4;

    constructor() {
    }

    ngOnInit() {
    }

    public countDownFinish(): void {
        console.log('count down finished');
    }

    public timerStart(): void {
        console.log('Timer Start');
    }

    public timerStop(): void {
        console.log('Timer Stop');
    }

    public timerTick(): void {
        console.log('Timer Tick');
    }
}
