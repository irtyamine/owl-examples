import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-error-msg-example',
    templateUrl: './error-msg.component.html',
    styleUrls: ['./error-msg.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMsgComponent implements OnInit {

    public emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);

    constructor() {
    }

    ngOnInit() {
    }

}
