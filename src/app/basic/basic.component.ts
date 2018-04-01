import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OwlSweetAlertService } from 'owl-ng';

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {

    public dialogTitle = 'Sweet Alert';

    public dialogContent = 'Here is your SweetAlert Message.';

    public dialogType: any = null;

    public dialogTimer: number = null;

    public dialogConfirmBtnContent = 'OK';

    public dialogCancelBtnContent = 'Cancel';

    public dialogReturnResult: any = {};

    constructor( private swal: OwlSweetAlertService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public alert(): void {
        const dialogRef = this.swal.swal({
            dialogTitle: this.dialogTitle,
            dialogContent: this.dialogContent,
            type: this.dialogType,
            timer: this.dialogTimer,
            cancelButtonContent: this.dialogCancelBtnContent,
            confirmButtonContent: this.dialogConfirmBtnContent,
        });

        dialogRef.afterOpen().subscribe(() => {
            console.log('Sweet Alert Opened.');
        });

        dialogRef.beforeClose().subscribe(( result: any ) => {
            console.log('Sweet Alert Before Closed.');
        });

        dialogRef.afterClosed().subscribe(( result: any ) => {
            this.dialogReturnResult = result;
            console.log(result);
            this.cdRef.markForCheck();
        });
    }
}
