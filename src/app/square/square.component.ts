import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button class="gimme-change" nbButton hero status="success" *ngIf="value == 'Gimme Change'">{{ value }}</button>
    <button class="no-change" nbButton hero status="info" *ngIf="value == 'No Change'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 1.5em !important; background-image: linear-gradient(to right, #e6b42c, #d69d00); }']
})
export class SquareComponent  {

  @Input() value: 'Gimme Change' | 'No Change';

}
