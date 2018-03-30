import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-prefix-suffix-example',
    templateUrl: './prefix-suffix.component.html',
    styleUrls: ['./prefix-suffix.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrefixSuffixComponent implements OnInit {

    public telephoneInput: string;

    constructor() {
    }

    ngOnInit() {
    }

}
