import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-preselection-example',
    templateUrl: './preselection.component.html',
    styleUrls: ['./preselection.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreselectionComponent implements OnInit {

    /* Preselection Example */
    public selectedBrands: string[] = ['Apple', 'Samsung'];

    constructor() {
    }

    ngOnInit() {
    }

}
