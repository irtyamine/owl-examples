import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OwlDialogService } from 'owl-ng';
import { DummyDialogComponent } from '../dummy-dialog/dummy-dialog.component';

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {

    public team: string;

    constructor( private dialogService: OwlDialogService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public openDialog(): void {
        const dialogRef = this.dialogService.open(DummyDialogComponent, {
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
