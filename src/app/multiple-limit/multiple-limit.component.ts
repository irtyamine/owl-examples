import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-multiple-limit-example',
    templateUrl: './multiple-limit.component.html',
    styleUrls: ['./multiple-limit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleLimitComponent implements OnInit {

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
