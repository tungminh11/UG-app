import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
  newdata:any;
  dataused:any;
  ngOnInit() {
    
  }

  ionViewWillEnter() {
    const dataget = this.route.snapshot.queryParamMap.get('Mydata');
    if(dataget === null){
      this.newdata = "No Data";
    }
    else{
      this.newdata = dataget;
      const dataobj = JSON.parse(this.newdata)
      this.dataused = dataobj.info;
      console.log(this.dataused);
      
      
    }
  }
  move_add_member(){
    this.router.navigate(['../tabs/tab4/add-member']);
  }


}
