import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-multiple-example',
    templateUrl: './multiple.component.html',
    styleUrls: ['./multiple.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleComponent implements OnInit {

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

    public favouriteTeams: string;

    constructor() {
    }

    ngOnInit() {
    }

}
