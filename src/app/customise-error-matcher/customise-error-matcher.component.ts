import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from 'owl-ng';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-customise-error-matcher-example',
    templateUrl: './customise-error-matcher.component.html',
    styleUrls: ['./customise-error-matcher.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomiseErrorMatcherComponent implements OnInit {

    public emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);

    public customiseErrorMatcher = new MyErrorStateMatcher();

    constructor() {
    }

    ngOnInit() {
    }

}
