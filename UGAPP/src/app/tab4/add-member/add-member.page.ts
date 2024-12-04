import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AddMemberService } from 'src/app/@app-core/http/add_member';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {

  constructor(
    public alertCtrl: AlertController,
    public addMemberService: AddMemberService,
    public Router:Router
  ) { }
username:any;
public data:any;
public users:any
  ngOnInit() {
    
  
    this.addMemberService.getmember().subscribe({
      next: (response) => {
        this.data = response.data.userDTOS;
        console.log(this.data);
        this.users = this.data
        
        console.log(this.data[0].fullname);
        
        
        
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
  data_addmem:any;
  async addmember(){
    let alert = await this.alertCtrl.create({
      header: 'Thêm Thành Viên',
      subHeader: 'Hãy nhập số điện thoại của thành viên bạn muốn thêm',
      inputs: [
        {
          name: 'phonenum',
          placeholder: 'Số điện thoại',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Hủy',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked.');
          }
        },
        {
          text: 'Thêm',
          handler: data => {
          this.addMemberService.addmember(data.phonenum).subscribe({
            next: (res) => {
              console.log(res);
            },
            error: (err) => {
              console.log(err);
            }
          })
            
            
            console.log('Saved clicked.');
          }
        }
      ]
    });
    await alert.present();
  }//
  back(){
    this.Router.navigate(['tabs/tab4'])

  }

}
