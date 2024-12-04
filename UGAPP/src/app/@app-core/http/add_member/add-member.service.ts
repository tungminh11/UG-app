import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AddMemberService {

  constructor(
    private http: HttpClient
  ) { }
  public addmember(phone: any) {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    });

    return this.http.post(`http://localhost:8080/api/v1/group?phone=${phone}`, {}, { headers }).pipe(
        map((response: any) => {
            return response;
        }),
        catchError((error: any) => {
            throw error;
        })
    );
}

  public getmember(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
  });

  return this.http.get(`http://localhost:8080/api/v1/group`,{headers}).pipe(
      map((response: any) => {
          return response;
      }),
      catchError((error: any) => {
          throw error;
      })
  );
  
}
}
