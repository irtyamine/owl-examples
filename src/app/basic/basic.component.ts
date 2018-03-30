import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {

    public sliderValue = 10;
    public max = 100;
    public min = 0;
    public step = 1;
    public showTicks = false;
    public disabled = false;
    public showBalloonLabel = true;
    public vertical = false;

    private _tickInterval = 10;
    get tickInterval(): number {
        return this.showTicks ? this._tickInterval : 0;
    }

    set tickInterval( v: number ) {
        this._tickInterval = Number(v);
    }

    constructor() {
    }

    ngOnInit() {
    }

    public changeOnSliding( event: any ): void {
        console.log(event.value);
    }
}
