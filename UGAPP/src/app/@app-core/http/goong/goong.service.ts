import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GoongService {

  constructor(
    public http: HttpClient,
  ) { }
  public getcurrentposition(api_key:any,lat:any,lng:any){
    return this.http.get(`https://rsapi.goong.io/Geocode?latlng=${lat},${lng}&api_key=${api_key}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err) => {
        throw err.error
      })
    )
  }
  public getplaces(apikey:any,req:any){
    console.log();
    
    return this.http.get(`https://rsapi.goong.io/Place/AutoComplete?api_key=${apikey}&location=''&input=${req}`).pipe(
      map((result)=>{
        console.log(result);
        
        return result
      }),
      catchError((err) => {
        throw err.error
        
      })
    );
      }
  public getlatlngbyid(api_key:any,place_id:any){
    return this.http.get(`https://rsapi.goong.io/Place/Detail?place_id=${place_id}&api_key=${api_key}`).pipe(
      map((response: any) => {
        return response
      }),
      catchError((err) => {
        throw err.error
      })
    )
  }
}
