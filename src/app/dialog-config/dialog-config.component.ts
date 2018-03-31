import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DummyDialogComponent } from '../dummy-dialog/dummy-dialog.component';
import { OwlDialogService } from 'owl-ng';

@Component({
    selector: 'app-dialog-config-example',
    templateUrl: './dialog-config.component.html',
    styleUrls: ['./dialog-config.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogConfigComponent implements OnInit {

    public team: string;

    constructor( private dialogService: OwlDialogService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public openDialog(): void {

        // the dialog global config is placed in app.module provider
        const dialogRef = this.dialogService.open(DummyDialogComponent, {
            width: '450px', // the config would overwrite the dialog global config
            height: '300px',
            dialogClass: 'custom-dialog-class', // the config would overwrite the dialog global config
            data: {team: this.team}, // data that would pass to dialog component
        });

        dialogRef.afterClosed().subscribe(( data: any ) => {
            if (data && data.type === 'confirm') {
                this.team = data.team;
                this.cdRef.markForCheck();
            }
        });
    }

}
