import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../@app-core/http/authenservice';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  constructor(
    public router: Router,
    public http: HttpClient,
    public auth: AuthenticationService,
    public alertController: AlertController
  ) { }
  forminfo = new FormGroup({
    phone:new FormControl(""),
  })
  ngOnInit(

  ) {
  }
  backtologin(){
    this.router.navigate(['/login']);
  }
  resetpass(){

    this.auth.forgotpass(this.forminfo.value).subscribe({
      next: (res) => {
        console.log(res); 
        const alert = this.alertController.create({
          header: `Mật Khẩu Mới Của Bạn Là : ${res.new_password}`,
          buttons: ['Đóng'],
        });
        alert.then(alert => {
          alert.present();
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
    
  }

}
