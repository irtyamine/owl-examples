import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {

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

    public favouriteTeam: string;

    constructor() {
    }

    ngOnInit() {
    }

}
