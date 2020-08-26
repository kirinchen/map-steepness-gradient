import { CommUtils } from './../comm-utils';
import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare let $: any;
declare let google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor() { }

  async ngOnInit(): Promise<void> {
    // await CommUtils.delay(1000);
    const map = await new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });


  }

}
