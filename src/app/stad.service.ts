import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StadService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {

    //Hämtar in städer som gör att man får lista när man söker
    return this.http.get("./assets/city_list.json") as Observable<any>;
  }
}