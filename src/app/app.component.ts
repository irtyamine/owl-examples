import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { OwlNotifierService } from 'owl-ng';
import { CustomNotifierComponent } from './custom-notifier/custom-notifier.component';

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
        const notifierRef = this.notifier.open(this.message, this.action, {
            verticalPosition: this.vertical,
            horizontalPosition: this.horizontal,
            life: this.life,
            type: this.type
        });

        notifierRef.afterOpen().subscribe(() => {
            console.log('notifier opened');
        });

        notifierRef.afterDismissed().subscribe(() => {
            console.log('notifier dismissed');
        });

        notifierRef.onAction().subscribe(() => {
            console.log('Clicking Notifier Action');
        });
    }

    public notifyCustom(): void {
        const notifierRef = this.notifier.openViaComponent(CustomNotifierComponent, {
            data: {customMsg: 'This is a Custom Notifier'}, // data passing to custom notifier component
            notifierClass: 'custom-notifier-class', // custom notifier class
            verticalPosition: this.vertical,
            horizontalPosition: this.horizontal,
            life: this.life,
            type: this.type
        });

        notifierRef.afterOpen().subscribe(() => {
            console.log('Custom Notifier Opened');
        });

        notifierRef.afterDismissed().subscribe(() => {
            console.log('Custom Notifier Dismissed');
        });

        notifierRef.onAction().subscribe(() => {
            console.log('Clicking Custom Notifier Action');
        });
    }
}
