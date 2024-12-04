import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public name: any;
  public email: any;
  public password: any;
  public phone: any;
  public pic: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public navCtrl: NavController, private alertCtrl: AlertController,
    private camera: Camera
  ) { }
  newdata:any;
  dataused:any;
  public fullname:any;
  ngOnInit(

    
  ) {
    this,this.fullname = localStorage.getItem('fullname')
    
  }
    ionViewDidLoad() {

      
    console.log('ionViewDidLoad Register');
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
  myphoto:any;
  get_image(){
    console.log("vao");
    
    const options:CameraOptions ={
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false,
    }
    this.camera.getPicture(options).then((imagedata)=>{
      this.myphoto = 'data:image/jpeg;base64,'+imagedata;
    })
  }


}
