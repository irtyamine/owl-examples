import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-programmatic-control-example',
    templateUrl: './programmatic-control.component.html',
    styleUrls: ['./programmatic-control.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgrammaticControlComponent implements OnInit {

    public index = 0;

    constructor() {
    }

    ngOnInit() {
    }

    public openPrev() {
        if (this.index === 0) {
            return;
        }

        this.index -= 1;
    }

    public openNext() {
        if (this.index === 2) {
            return;
        }

        this.index += 1;
    }

    public setStep( num: number ): void {
        if (this.index !== num) {
            this.index = num;
        }
    }
}
