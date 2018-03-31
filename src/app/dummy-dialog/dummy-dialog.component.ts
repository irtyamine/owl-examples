import {
    Component, OnInit, ChangeDetectionStrategy, Inject, AfterViewInit, ViewChild,
    ElementRef, ViewEncapsulation
} from '@angular/core';
import { OWL_DIALOG_DATA, OwlDialogRef } from 'owl-ng';

@Component({
    selector: 'app-dummy-dialog',
    templateUrl: './dummy-dialog.component.html',
    styleUrls: ['./dummy-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DummyDialogComponent implements OnInit, AfterViewInit {

    @ViewChild('inputElm') inputElm: ElementRef;

    public value: string;

    constructor( public dialogRef: OwlDialogRef<DummyDialogComponent>,
                 @Inject(OWL_DIALOG_DATA) public data: any ) {
    }

    ngOnInit() {
    }

    public ngAfterViewInit(): void {
        this.value = this.data.team;

        this.dialogRef.afterOpen().subscribe(() => {
            this.inputElm.nativeElement.focus();
        });
    }

    public onOkClick() {
        this.dialogRef.close({
            type: 'confirm',
            team: this.value
        });
    }

    public onCancelClick() {
        this.dialogRef.close({
            type: 'cancel'
        });
    }

    public onInputConfirm( event: KeyboardEvent ): void {
        const code = event.keyCode;

        if (code === 13) {
            this.onOkClick();
            event.preventDefault();
        }
    }
}
