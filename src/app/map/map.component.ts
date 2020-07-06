import { Component, OnInit, AfterViewInit } from '@angular/core';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{ //AfterViewInit {

  map:any;

  constructor() { }

  // ngAfterViewInit() {
  //   this.initializeMap();
  // }

  ngOnInit(){
    this.initializeMap();
  }

  initializeMap() {
    this.map = new Map({
      target: 'map',
      layers: [new TileLayer({
        source: new OSM()
      })],
      view: new View({
        center: [15, 15],
        zoom: 1
      })
    });
  }
}