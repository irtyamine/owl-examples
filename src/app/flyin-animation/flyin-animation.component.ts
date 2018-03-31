import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DummyDialogComponent } from '../dummy-dialog/dummy-dialog.component';
import { OwlDialogService } from 'owl-ng';

@Component({
    selector: 'app-flyin-animation-example',
    templateUrl: './flyin-animation.component.html',
    styleUrls: ['./flyin-animation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyinAnimationComponent implements OnInit {

    public team = 'Golden State Warriors';

    constructor( private dialogService: OwlDialogService,
                 private cdRef: ChangeDetectorRef ) {
    }

    ngOnInit() {
    }

    public openDialog(event: any): void {
        const dialogRef = this.dialogService.open(DummyDialogComponent, {
            data: {team: this.team},
            transitionX: event.clientX,
            transitionY: event.clientY,
        });

        dialogRef.afterClosed().subscribe(( data: any ) => {
            if (data && data.type === 'confirm') {
                this.team = data.team;
                this.cdRef.markForCheck();
            }
        });
    }

}
