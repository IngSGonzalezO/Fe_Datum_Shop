import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { MapJsComponent } from './map-js/map-js.component';


var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'map-js',
        component: MapJsComponent,
        data: {
          title: 'Map Js',
          breadcrumb: 'Map Js',
          animation: [routingAnimation]
        }
       
      },
      {
        path: 'leaflet-map',
        component: LeafletMapComponent,
        data: {
          title: 'Leaflet Map',
          breadcrumb: 'Leaflet Map',
          animation: [routingAnimation]
        }
       
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
