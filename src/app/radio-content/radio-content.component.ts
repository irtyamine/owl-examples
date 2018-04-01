import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OwlSweetAlertService } from 'owl-ng';

@Component({
    selector: 'app-radio-content-example',
    templateUrl: './radio-content.component.html',
    styleUrls: ['./radio-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioContentComponent implements OnInit {

    public dialogReturnResult: any = {};
    public dialogValue = 'Blue';

    constructor( private swal: OwlSweetAlertService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public alert(): void {
        const dialogRef = this.swal.swal({
            dialogTitle: 'Sweet Alert',
            dialogContent: 'Select your favourite color',
            input: 'radio',
            inputValue: this.dialogValue,
            inputOptions: {
                Red: 'Red',
                Blue: 'Blue',
                Green: 'Green'
            },
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
