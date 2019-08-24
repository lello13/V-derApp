import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-vader-data',
  templateUrl: './vader-data.component.html',
  styleUrls: ['./vader-data.component.css']
})
export class VaderDataComponent implements OnInit {

 city = '?';
 weather = '?';
 forecastData = {};
 rainForecast = 0;
 snowForecast = 0;
 windDir = 0;
 windDeg = 0;
 temp = 0;
 sunriseTime = 0;
 sunsetTime = 0;
 cloudPercentage = 0;
 longitude = 0;
 latitude = 0;
 windSpeed = 0;
 windspeedForecast = 0;
 startTid = 0;
 slutTid = 0;
 

   constructor(
     public weatherService: WeatherService, 
     private route: ActivatedRoute,
     private router: Router) 
     { }

   ngOnInit() {
    //Routing till vaderdata/vader
    this.city = this.route.snapshot.params['vader'];

    // Hämtar väderdata och lägger in de
    this.weatherService.getWeatherData(this.city).subscribe(vData => { 
      
      this.weather = vData.weather.description;
      this.temp = vData.temp;
      this.sunriseTime = vData.sunriseTime;
      this.sunsetTime = vData.sunsetTime;
      this.cloudPercentage = vData.cloudPercentage;
      this.longitude = vData.longitude;
      this.latitude = vData.latitude;
      this.windSpeed = vData.windSpeed;
      this.windDir = vData.windDir;
      this.windDeg = vData.windDeg;
      
    });

    // Kommande dygn data
    this.weatherService.getDayData(this.city).subscribe(vData => {
      this.forecastData = vData.forecastData;
      this.rainForecast = vData.rainForecast;
      this.snowForecast = vData.snowForecast;
      this.startTid = tidsett(1); 
      this.slutTid = tidsett(2);
      
      //Tid börjar kl7
      function tidsett($dayforTime) {
        var date = new Date();
        date.setDate(date.getDate() + $dayforTime);
        date.setHours(7, 0, 0, 0);
        var x = date.getTime();
        var unix = Math.ceil(x / 1000);
        return unix;
      }
      
    });
  }

  tillbaka() {
    this.router.navigate(['']);
  }
}