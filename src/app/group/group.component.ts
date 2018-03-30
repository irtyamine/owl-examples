import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-group-example',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupComponent implements OnInit {

    public favouriteBeverage: string;

    constructor() {
    }

    ngOnInit() {
    }

}
