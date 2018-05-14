import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

    public hidden = false;

    public value = 5;

    public position_x = 'right';

    public position_y = 'above';

    public size = 'medium';

    public overlap = true;

    toggleHidden(): void {
        this.hidden = !this.hidden;
    }

    increaseValue(): void {
        this.value += 1;
    }
}
