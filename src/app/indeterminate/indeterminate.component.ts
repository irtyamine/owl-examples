import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-indeterminate-example',
    templateUrl: './indeterminate.component.html',
    styleUrls: ['./indeterminate.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndeterminateComponent implements OnInit {

    /* Indeterminate Checkbox Example */
    public selectedGroceries: string[] = [];
    public fruitChecked = false;
    public fruitIndeterminate = false;
    public meatChecked = false;
    public meatIndeterminate = false;

    constructor() {
    }

    ngOnInit() {
    }

    public toggleFruitCheck( event: any ): void {
        if (event.checked) {
            this.selectedGroceries = this.selectedGroceries.filter(( v ) => {
                return v !== 'Apple' && v !== 'Orange';
            });
            this.selectedGroceries = [...this.selectedGroceries, 'Apple', 'Orange'];
        } else {
            this.selectedGroceries = this.selectedGroceries.filter(( v ) => {
                return v !== 'Apple' && v !== 'Orange';
            });
        }
    }

    public onFruitChange( event: any ): void {
        const hasApple = this.selectedGroceries.includes('Apple');
        const hasOrange = this.selectedGroceries.includes('Orange');

        this.fruitChecked = hasApple && hasOrange;
        this.fruitIndeterminate = (hasApple && !hasOrange) || (!hasApple && hasOrange);
    }

    public toggleMeatCheck( event: any ): void {
        if (event.checked) {
            this.selectedGroceries = this.selectedGroceries.filter(( v ) => {
                return v !== 'Pork' && v !== 'Beef';
            });
            this.selectedGroceries = [...this.selectedGroceries, 'Pork', 'Beef'];
        } else {
            this.selectedGroceries = this.selectedGroceries.filter(( v ) => {
                return v !== 'Pork' && v !== 'Beef';
            });
        }
    }

    public onMeatChange( event: any ): void {
        const hasPork = this.selectedGroceries.includes('Pork');
        const hasBeef = this.selectedGroceries.includes('Beef');

        this.meatChecked = hasPork && hasBeef;
        this.meatIndeterminate = (hasPork && !hasBeef) || (!hasPork && hasBeef);
    }

}
