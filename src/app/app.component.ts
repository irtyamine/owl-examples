import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { OwlNotifierService } from 'owl-ng';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

    public message = 'Here is your notifier message.';

    public action = 'Action';

    public vertical: any = 'bottom';

    public horizontal: any = 'center';

    public life = 0;

    public type: any;

    constructor( private notifier: OwlNotifierService ) {
    }

    public notify(): void {
        this.notifier.open(this.message, this.action, {
            verticalPosition: this.vertical,
            horizontalPosition: this.horizontal,
            life: this.life,
            type: this.type
        });
    }
}
