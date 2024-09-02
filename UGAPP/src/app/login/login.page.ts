import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../@app-core/http/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:any = [
    {
      phone:"091234567",
      password:"123456"
    },
    {
      phone:"091234797",
      password:"12345"
    },
    {
      phone:"09999999",
      password:"123456"
    }
  ]
  constructor(
    private authservice: AuthserviceService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  formInfo = new FormGroup({
    phone: new FormControl,
    password: new FormControl
  });
  checkinf(){
    console.log(this.formInfo.value);
    console.log(this.user[0]);
    for(let i=0;i<this.user.length;i++){
    if(this.formInfo.value.phone == this.user[i].phone && this.formInfo.value.password == this.user[i].password){
      console.log('login success');
    }
    else{
      console.log('login failed');
    }
    }

    
  }
  toforgotPass(){
    this.router.navigate(['/forgotpass']);
  }
  

}