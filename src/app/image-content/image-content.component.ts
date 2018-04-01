import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OwlSweetAlertService } from 'owl-ng';

@Component({
    selector: 'app-image-content-example',
    templateUrl: './image-content.component.html',
    styleUrls: ['./image-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageContentComponent implements OnInit {

    constructor( private swal: OwlSweetAlertService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public alert(): void {
        const dialogRef = this.swal.swal({
            dialogTitle: 'Sweet Alert',
            imageClass: 'sweet-alert-image',
            imageAlt: 'this is a sweet alert image',
            imageUrl: 'https://picsum.photos/800/550/?image=889',
        });

        dialogRef.afterOpen().subscribe(() => {
            console.log('Sweet Alert Opened.');
        });

        dialogRef.beforeClose().subscribe(( result: any ) => {
            console.log('Sweet Alert Before Closed.');
        });

        dialogRef.afterClosed().subscribe(( result: any ) => {
            console.log(result);
            this.cdRef.markForCheck();
        });
    }
}
