import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }
  public register(req:any){
    return this.http.post(`https://goha-server.up.railway.app/api/provider/auth/register`,req).pipe(
      map((response: any) => {
        return response
      }),
      catchError((error: any) => {
        throw error
      })
    )
  }
  public login(req:any){
    return this.http.post(`https://goha-server.up.railway.app/api/provider/auth/login`,req).pipe(
      map((response: any) => {
        return response
      }),
      catchError((error: any) => {
        throw error
      })
    )
  }
  public forgotpass(req:any){
    return this.http.post(`https://goha-server.up.railway.app/api/provider/auth/forgot_password_basic`,req).pipe(
      map((response: any) => {
        return response
      }),
      catchError((error: any) => {
        throw error
      })
    )
  }
}
