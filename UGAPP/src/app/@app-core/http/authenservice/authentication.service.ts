import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenKey = 'authToken'
  constructor(
    private http: HttpClient,
  ) { }
  // async init(){
  //   await this.storage.create();
  // }
  //   // Save the token to storage
  //   async saveToken(token: string): Promise<void> {
  //     await this.storage.set(this.tokenKey, token);
  //   }
  
  //   // Retrieve the token from storage
  //   async getToken(): Promise<string | null> {
  //     return await this.storage.get(this.tokenKey);
  //   }
  
  //   // Remove the token from storage (for logout)
  //   async removeToken(): Promise<void> {
  //     await this.storage.remove(this.tokenKey);
  //   }
  
  public register(req:any){
    return this.http.post(`http://localhost:8080/api/v1/user/signup`,req).pipe(
      map((response: any) => {
        return response
      }),
      catchError((error: any) => {
        throw error
      })
    )
  }

  public login(req:any){
    return this.http.post(`http://localhost:8080/api/v1/user/signin`,req).pipe(
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
