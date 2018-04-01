import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-input-chips-example',
    templateUrl: './input-chips.component.html',
    styleUrls: ['./input-chips.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputChipsComponent implements OnInit {

    public drinks = [
        {name: 'Coke'},
        {name: 'Sprite'},
        {name: 'Soda'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    public addDrinks( event: any ): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            this.drinks.push({name: value.trim()});
        }

        if (input) {
            input.value = '';
        }
    }

    public removeDrinks( drink: any ): void {
        const index = this.drinks.indexOf(drink);

        if (index >= 0) {
            this.drinks.splice(index, 1);
        }
    }
}
