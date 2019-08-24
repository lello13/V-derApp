import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {Router} from '@angular/router';
import { StadService } from '../stad.service'; 

@Component({
  selector: 'app-vaderprognos',
  templateUrl: './vaderprognos.component.html',
  styleUrls: ['./vaderprognos.component.css']
})

export class VaderprognosComponent implements OnInit {
  public stadLista;
  id:string;
  nm:string;
  lat:number;
  lon:number;
  countryCode:string;

  letaStad:string;
  fel:boolean;

  constructor(
    public weatherService: WeatherService, 
    private router: Router,
    public appService: StadService) { }

  ngOnInit() {
    this.appService.getData().subscribe(stadLista=> {
      this.stadLista = stadLista
   
    });

  }
  
//Hittar städer
  letaStader() {
  
    this.fel = false;
    const stad = this.letaStad;
    this.weatherService.getWeatherData(stad).subscribe(x => {
      console.log('Stad hittad');
      this.router.navigate(['/vaderdata/'+stad]);
    },
      error => {
        console.log('Kunde ej hitta');
        this.fel = true;
      });
  }
 } 