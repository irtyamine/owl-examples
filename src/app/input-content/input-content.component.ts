import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OwlSweetAlertService } from 'owl-ng';

@Component({
    selector: 'app-input-content-example',
    templateUrl: './input-content.component.html',
    styleUrls: ['./input-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputContentComponent implements OnInit {

    public dialogReturnResult: any = {};

    constructor( private swal: OwlSweetAlertService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public alertInput(): void {
        const dialogRef = this.swal.swal({
            dialogTitle: 'Sweet Alert',
            input: 'text'
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

    public alertTextarea(): void {
        const dialogRef = this.swal.swal({
            dialogTitle: 'Sweet Alert',
            input: 'textarea'
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
