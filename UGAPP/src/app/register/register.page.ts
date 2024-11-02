import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../@app-core/http/authenservice';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router,
    private authservice: AuthenticationService,
    private http: HttpClient,
    private toastCtrl: ToastController
    
  ) { }

  ngOnInit() {
  }
  forminfo = new FormGroup({
    phone:new FormControl(""),
    password:new FormControl(""),
    full_name: new FormControl("")
  })
  backtologin(){
    this.router.navigate(['/login']);
  }
  regis(){  
    const confirmpass = <HTMLInputElement>document.getElementById("confirmpass");
    const password = <HTMLFormElement>document.getElementById("password");
    const phone = <HTMLFormElement>document.getElementById("phone");
    const full_name = <HTMLFormElement>document.getElementById("full_name");
    console.log(confirmpass.value);
    
    this.authservice.register(this.forminfo.value).subscribe({
      next: (res) => {
        console.log(res); 
        const toast = this.toastCtrl.create({
          message: 'Đăng ký thành công! chuyển trang sau 3 giây',
          duration: 3000,
          position: "top",
          color: 'success',
        });
        toast.then(toast => toast.present());
        setTimeout(
          ()=>{
            this.router.navigate(['/login']);
          },3000
        )

      },
      error: (err) => {
        console.log(err);
        const toast = this.toastCtrl.create({
          message: 'Đăng ký Thất Bại! Vui lòng thử lại',
          duration: 1500,
          position: "top",
          color: 'warning',
        });
        toast.then(toast => toast.present());
      }
    })
    console.log(this.forminfo.value);
      
  }

}
