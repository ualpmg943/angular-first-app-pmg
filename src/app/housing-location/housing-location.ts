import {Component, Input} from '@angular/core';
import {HousingLocationInfo} from '../housing-location';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: ` <p>housing-location works!</p> `,
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  //housingLocation = input.required<HousingLocationInfo>();
  @Input() housingLocation!: HousingLocationInfo;
}
