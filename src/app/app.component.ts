import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

    public rateValue1: number;

    public rateValue2: number;

    public rateValue3: number;

    public rateValue4 = 2;

    public ratingDisabled: boolean;

    public ratingReadonly: boolean;

    public ratingAllowNull: boolean;
}
