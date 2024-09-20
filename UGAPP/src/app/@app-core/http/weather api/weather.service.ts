import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }
  public getWeather(latcurrent:any,lngcurrent:any){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latcurrent}&lon=${lngcurrent}&appid=98d55ef619e4162e3f2b833fd50fad18&units=metric&lang=vi`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err)=>{
        throw err.error
      })

    )
  }
}
