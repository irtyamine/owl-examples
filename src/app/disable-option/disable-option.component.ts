import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-disable-option-example',
  templateUrl: './disable-option.component.html',
  styleUrls: ['./disable-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisableOptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
