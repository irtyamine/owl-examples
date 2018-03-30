import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-object-option-example',
    templateUrl: './object-option.component.html',
    styleUrls: ['./object-option.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectOptionComponent implements OnInit {

    public selectedCar = {'id': 'gwregre345', 'brand': 'Audi', 'year': 2011, 'color': 'Black'};

    public cars: any[] = [
        {'id': 'dsad231ff', 'brand': 'VW', 'year': 2012, 'color': 'Orange'},
        {'id': 'gwregre345', 'brand': 'Audi', 'year': 2011, 'color': 'Black'},
        {'id': 'h354htr', 'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
        {'id': 'j6w54qgh', 'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    ];

    public carCompareFn = ( car1: any, car2: any ): boolean => {
        return car1.id === car2.id;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
