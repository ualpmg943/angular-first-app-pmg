import {Component, Input} from '@angular/core';
import {HousingLocationInfo} from '../housing-location';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
  <section class="listing"> 
    <img class="listing-photo" [src]="housingLocation.photo" alt="External photo of {{ housingLocation.name }}"/>
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p> 
  </section>
  `, 
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  //housingLocation = input.required<HousingLocationInfo>();
  @Input() housingLocation!: HousingLocationInfo;
}
