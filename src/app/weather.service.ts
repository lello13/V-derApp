import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 @Injectable({
  providedIn: 'root'
})
export class WeatherService {
   http: any;
   constructor(private httpClient: HttpClient) { }
  //Lösenord till OpenweatherMap för att komma åt väderdata
  apiPassword = '398b1e2d9e1f4b6baf825f2065c4df75';
  
  // Skapa metric unit för åtkomst till openweathermap
  unit = 'metric';

    // Hämtar 24h(Dygnets) väderdata 
    getDayData(city: string): Observable<any> {
      const apiData = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${this.unit}&APPID=${this.apiPassword}`;
      console.log('apiData', apiData);
      return this.httpClient.get<any>(apiData).pipe(
        map(resp => {
          
          // API data värden
          const rainForecast = resp.list[0].rain;
          const snowForecast = resp.list[0].snow;
          const forecastData = resp;
          
          const väderD = { forecastData, rainForecast, snowForecast};
          console.log(väderD);
          return väderD;
  
        }));
      
    }

  // Hämtar väderdata till städer
  getWeatherData(city: string): Observable<any> {
    const apiData = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${this.unit}&APPID=${this.apiPassword}`;
    console.log('apiData', apiData);
    return this.httpClient.get<any>(apiData).pipe(
      map(resp => {
        
        //API data värden
        const weather = resp.weather[0];
        const temp = resp.main.temp;
        const sunriseTime = timeConverter(resp.sys.sunrise);
        const sunsetTime = timeConverter(resp.sys.sunset);
        const cloudPercentage = resp.clouds.all;
        const longitude = resp.coord.lon;
        const latitude = resp.coord.lat;
        const windSpeed = resp.wind.speed;
        const windDeg = resp.wind.deg;
        const windDir = vindRiktning(resp.wind.deg);

        const väderD = { weather, temp, sunriseTime, sunsetTime, cloudPercentage, longitude, latitude, windSpeed, windDir, windDeg, };
        return väderD;
      }));
  }

}

// Lägger till rätt tid
function timeConverter($timeStamp) {
  var date = new Date($timeStamp * 1000);
  var timmar = date.getHours();
  var minuter = "0" + date.getMinutes();
  var sekunder = "0" + date.getSeconds();
  var nyTid = timmar + ':' + minuter.substr(-2) + ':' + sekunder.substr(-2);
  return nyTid;
}

//Skriver ut vindriktning
var vindRiktning = function(deg){
  if (deg>11.25 && deg<33.75){ return "NNE"; }
  else if (deg>33.75 && deg<56.25){ return "ENE"; }
  else if (deg>56.25 && deg<78.75){ return "E"; }
  else if (deg>78.75 && deg<101.25){ return "ESE"; }
  else if (deg>101.25 && deg<123.75){ return "ESE"; }
  else if (deg>123.75 && deg<146.25){ return "SE"; }
  else if (deg>146.25 && deg<168.75){ return "SSE"; }
  else if (deg>168.75 && deg<191.25){ return "S"; }
  else if (deg>191.25 && deg<213.75){ return "SSW"; }
  else if (deg>213.75 && deg<236.25){ return "SW"; }
  else if (deg>236.25 && deg<258.75){ return "WSW"; }
  else if (deg>258.75 && deg<281.25){ return "W"; }
  else if (deg>281.25 && deg<303.75){ return "WNW"; }
  else if (deg>303.75 && deg<326.25){ return "NW"; }
  else if (deg>326.25 && deg<348.75){ return "NNW"; }
  else { return "N"; }
}