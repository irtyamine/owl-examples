import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OwlSweetAlertService } from 'owl-ng';

@Component({
    selector: 'app-check-box-content-example',
    templateUrl: './check-box-content.component.html',
    styleUrls: ['./check-box-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckBoxContentComponent implements OnInit {

    public dialogReturnResult: any = {};
    public dialogValue = true;

    constructor( private swal: OwlSweetAlertService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public alert(): void {
        const dialogRef = this.swal.swal({
            dialogTitle: 'Sweet Alert',
            dialogContent: 'This Angular Packages is Awesome',
            input: 'checkBox',
            inputLabel: 'I agree with the terms and conditions',
            inputValue: this.dialogValue,
        });

        dialogRef.afterOpen().subscribe(() => {
            console.log('Sweet Alert Opened.');
        });

        dialogRef.beforeClose().subscribe(( result: any ) => {
            console.log('Sweet Alert Before Closed.');
        });

        dialogRef.afterClosed().subscribe(( result: any ) => {
            this.dialogReturnResult = result;
            this.dialogValue = result.value;
            console.log(result);
            this.cdRef.markForCheck();
        });
    }
}
