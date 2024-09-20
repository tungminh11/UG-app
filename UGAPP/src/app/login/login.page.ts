import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../@app-core/http/auth';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:any = [
    {
      phone:"091234567",
      password:"123456",
      info:[
        {
          name:"tm3",
          username:"tngminh3",
          email:"abcxyz@gmail.com"
        }
      ]
    },
    {
      phone:"091234797",
      password:"12345",
      info:[
        {
          name:"tm2",
          username:"tngminh2",
          email:"abcxyz@gmail.com"

        }
      ]
    },
    {
      phone:"09999999",
      password:"123456",
      info:
        {
          name:"tm",
          username:"tngminh",
          email:"abcxyz@gmail.com"
          
        }
      
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

    for(let i=0;i<this.user.length;i++){
    if(this.formInfo.value.phone == this.user[i].phone && this.formInfo.value.password == this.user[i].password){
      console.log('login success');
      console.log(this.user[i]);
      const queryParams:any ={};
      const datapush = this.user[i];
      queryParams.Mydata = JSON.stringify(datapush);
      const navigationExtra:NavigationExtras = {
        queryParams
      };
      this.router.navigate(['/tabs/tab4'],navigationExtra);
      this.router.navigate(['/tabs/tab1'])
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
