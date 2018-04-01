import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OwlSweetAlertService } from 'owl-ng';

@Component({
    selector: 'app-html-content-example',
    templateUrl: './html-content.component.html',
    styleUrls: ['./html-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlContentComponent implements OnInit {

    public dialogReturnResult: any = {};

    constructor( private swal: OwlSweetAlertService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public alert(): void {
        const dialogRef = this.swal.swal({
            dialogTitle: 'Sweet Alert',
            dialogContent: 'You can use <b>bold text</b>, ' +
            '<a tabindex="-1" href="//github.com">links</a> ' +
            'and other HTML tags',
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
