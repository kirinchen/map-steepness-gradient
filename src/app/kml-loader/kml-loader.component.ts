import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kml-loader',
  templateUrl: './kml-loader.component.html',
  styleUrls: ['./kml-loader.component.css']
})
export class KmlLoaderComponent implements OnInit {


  public devGitsJson: string;

  constructor(
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {

  }



}
