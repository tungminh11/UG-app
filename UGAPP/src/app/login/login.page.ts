import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../@app-core/http/auth';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from '../@app-core/http/authenservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private authservice: AuthserviceService,
    private router: Router,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }
  formInfo = new FormGroup({
    phone: new FormControl,
    password: new FormControl
  });
  checkinf(){
    this.auth.login(this.formInfo.value).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tabs/tab1']);
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
