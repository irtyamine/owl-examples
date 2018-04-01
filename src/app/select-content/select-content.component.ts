import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OwlSweetAlertService } from 'owl-ng';

@Component({
    selector: 'app-select-content-example',
    templateUrl: './select-content.component.html',
    styleUrls: ['./select-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectContentComponent implements OnInit {

    public dialogReturnResult: any = {};
    public dialogValue = {id: 2, name: 'Los Angeles Lakers'};

    constructor( private swal: OwlSweetAlertService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public alert(): void {
        const dialogRef = this.swal.swal({
            dialogTitle: 'Sweet Alert',
            input: 'select',
            inputPlaceholder: 'Select your favourite team',
            inputValue: this.dialogValue,
            inputOptions: {
                'Golden State Warrior': {id: 1, name: 'Golden State Warrior'},
                'Los Angeles Lakers': {id: 2, name: 'Los Angeles Lakers'},
                'Cleveland Cavaliers': {id: 3, name: 'Cleveland Cavaliers'}
            },
            inputCompareFn: ( ob1: any, ob2: any ): boolean => ob1.id === ob2.id,
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
