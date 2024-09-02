import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(

  ) {
  }
  backtologin(){
    this.router.navigate(['/login']);
  }

}
