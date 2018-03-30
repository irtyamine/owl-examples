import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-reactive-form-example',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent implements OnInit {

    public teams = [
        'Warriors',
        'Lakers',
        '76ers',
        'Celtics',
        'Raptors',
        'Rockets',
        'Thunders',
        'Heats',
        'Pacers',
        'Pistons',
        'Spurs',
        'Timberwolves',
        'Blazers',
        'Clippers',
        'Suns',
        'Hornets',
        'Pelicans',
        'Bucks',
        'Bulls',
        'Wizards',
        'Nuggets',
        'Knicks',
        'Nets',
        'Cavaliers',
        'Hawks',
        'Magic',
        'Jazz',
    ];

    public favouriteTeams = new FormControl(['Warriors', 'Lakers', 'Celtics', ]);

    constructor() {
    }

    ngOnInit() {
    }

}
