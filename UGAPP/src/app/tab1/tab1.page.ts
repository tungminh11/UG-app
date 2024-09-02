import { Component } from '@angular/core';
  @Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  datafake:any = [
    {
      text:"akjfbasiaksdsa"
    },
    {
      text:"akjfbasiaksdsa"
    },
    {
      text:"akjfbasiaksdsa"
    },
    {
      text:"akjfbasiaksdsa"
    },
    {
      text:"akjfbasiaksdsa"
    }

  ]
  dataget:any= this.datafake.slice(0,3);
}

