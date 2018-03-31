import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { OWL_NOTIFIER_DATA, OwlNotifierRef } from 'owl-ng';

@Component({
    selector: 'app-custom-notifier',
    templateUrl: './custom-notifier.component.html',
    styleUrls: ['./custom-notifier.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomNotifierComponent implements OnInit {

    public msg: string;

    constructor( private notifierRef: OwlNotifierRef<CustomNotifierComponent>,
                 @Inject(OWL_NOTIFIER_DATA) private data: any ) {
    }

    ngOnInit() {
        this.msg = this.data.customMsg;
    }

    public clickNotifier( event: any ): void {
        this.notifierRef.dismiss();
        event.preventDefault();
        event.stopPropagation();
    }

}
