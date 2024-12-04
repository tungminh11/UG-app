import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../@app-core/http/auth';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from '../@app-core/http/authenservice';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private authservice: AuthserviceService,
    private router: Router,
    private auth: AuthenticationService,
    private http:HttpClient,
  ) { }

  ngOnInit() {
  }
  formInfo = new FormGroup({
    phone: new FormControl,
    password: new FormControl
  });
  // credentials= {
  //   phone:'',
  //   password:''
  // }
  // async login() {
  //   // Replace with your login API request
  //   this.http.post('http://localhost:8080/api/v1/user/signin', this.credentials).subscribe(
  //     async (response: any) => {
  //       const token = response.token; // Assume response has a `token` field
  //       await this.authService.saveToken(token);
  //       console.log('Token saved successfully');
  //       // Redirect to a protected page or perform further actions
  //     },
  //     error => {
  //       console.error('Login failed', error);
  //     }
  //   );
  // }
  public data:any;
  async checkinf(){


    // try{
    //   const permissionstatus = await Geolocation.checkPermissions();
    //   console.log("permission status:",permissionstatus.location);
    //   if(permissionstatus?.location !='granted'){
    //     const requestStatus = await Geolocation.requestPermissions();
    //     if(requestStatus.location != 'granted'){
    //       return null
    //     }
    //   };
    //   let options: PositionOptions ={
    //     enableHighAccuracy: true,
    //     maximumAge:3000,
    //     timeout:10000
    //   };
    //   const position = await Geolocation.getCurrentPosition(options)
    //   console.log(position);
      
    // }
    // catch(e){
    //   throw(e)

    // }
    this.auth.login(this.formInfo.value).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('authToken',res.token)
        localStorage.setItem('fullname',res.data.username)
        const queryParams:any ={}
        const datamove = res.data;
        queryParams.data = JSON.stringify(datamove);
        const navigationExtra:NavigationExtras ={
          queryParams
        }
        this.router.navigate(['/tabs/tab1'],navigationExtra);


      },
      error: (err) => {
        console.log(err);
      }
    })

    


    
  }
  toforgotPass(){
    this.router.navigate(['/forgotpass']);
  }
  

}
