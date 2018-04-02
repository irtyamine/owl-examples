import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public movable = true;

    public spinable = false;

    public wingSelected(): void {
        console.log('wing clicked');
    }

    public menuExpanded(): void {
        console.log('menu expanded');
    }

    public menuCollapsed(): void {
        console.log('menu collapsed');
    }
}
