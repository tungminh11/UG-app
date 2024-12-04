
import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Geolocation, GeolocationPluginPermissions } from '@capacitor/geolocation';
import { LoadingController } from '@ionic/angular';
import { LoadingService } from '../@app-core/http/loading';
import { GoongService } from '../@app-core/http/goong';
import {NgZone } from '@angular/core'
import { map } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { SocketService } from '../@app-core/http/socket';
declare var google: any;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchcontent:any;
  placess:any;
  newdata:any;
  dataused:any;
  latmarker:any;
  lngmarker:any;
  map:any;
  lat:any;
  lng:any;
  currentposition:any = '';
  apikey ='mfFQoTbrNMiUyi5xL5ljfl68MmUbQIAFnWH0NgyX';
  apikeymap = 'mfFQoTbrNMiUyi5xL5ljfl68MmUbQIAFnWH0NgyX';
  places:any;
  currentpos:any = {
    lat:0,
    lng:0
  }
  multilat:any;
  multilng:any;
  placesnow:any;
  constructor(
    private loading: LoadingService,
    private loadingCtrl: LoadingController,
    private goong: GoongService,
    private zone: NgZone,
    private route: ActivatedRoute, private router: Router,
    private socket: SocketService


  ) {}
  public fullname:any
  public phone:any
  public latsub:any
  public lonsub:any
  possub:any

  ngOnInit(){
    const tokenget:any = localStorage.getItem('authToken')
    localStorage.setItem('authToken',tokenget)
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();      
      this.currentpos.lat = coordinates.coords.latitude;
      this.currentpos.lng = coordinates.coords.longitude;
      console.log(this.currentpos.lat)
      console.log(this.lng);
      this.socket.connect(tokenget);//gắn token vào đi e
      this.socket.subscribeToGroup()      
      console.log();
      this.route.queryParams.subscribe(params => {
        console.log('Dữ liệu từ Tab1:', params);
        console.log(params['fullname']);
        this.fullname = params['fullname']
        this.phone = params['phone']
        this.latsub = params['lat']
        this.lonsub = params['lon']
        console.log(this.fullname);
        console.log(this.phone);

        
        
      });
      


    };
  printCurrentPosition(); 
  
  

  }
  latdata:any;
  lngdata:any;


  //   const latLng = new google.maps.LatLng(this.latdata,this.lngdata);
  //   const marker = new google.maps.Marker({
  //     position:latLng,
  //     map: this.map,
  //     draggable: true,
  //     title:"Vị trí của bạn"
  //   })
  //   const mapOptions ={
  //     center: latLng, 
  //     zoom:15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }
  //       this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
  //       marker.setMap(this.map);
  //       this.map.setCenter(latLng);
  //       this.loading.dismiss()
  // }


  async listenEvent(res:any){

    this.searchcontent = res.detail.value;
    this.goong.getplaces(this.apikey,res.detail.value).subscribe({
      next: (data:any) => {
        this.places = data.predictions; 
        this.placess = data;
        
      },
      error: (err:any) => {
      }
    })
  }
  
  ionViewDidEnter(){
    console.log(this.currentpos);
    
    setTimeout(
      () => {
        this.loadMap(this.currentpos.lat,  this.currentpos.lng);
        this.loading.dismiss()
      },500
    )
    
      
      
    
  }
  markersub:any
  multimarker:any;
  ionViewWillEnter(){
    const  dataget = this.route.snapshot.queryParamMap.get('data')
    if(dataget === null){
      this.newdata = "No Data";
    }
    else{
      this.newdata = dataget;
      const dataobj = JSON.parse(this.newdata);
      this.dataused = dataobj;
      console.log(this.dataused);
      this.multimarker = [
        {
          lat:this.dataused.lat,
          lng:this.dataused.lng
        },
      ]

      
    }
    this.goong.getcurrentposition(this.apikey,this.currentpos.lat,this.currentpos.lng).subscribe({
      next:(res)=>{
        console.log(res);
        this.placesnow = res.results[0].formatted_address;
        console.log(this.placesnow);
              
      },
      error:(err)=>{
        console.log(err);
      }
    })
    this.goong.getcurrentposition(this.apikey,this.latsub,this.lonsub).subscribe({
      next:(res)=>{
        console.log(res);
        this.possub = res.results[0].formatted_address;
        console.log(this.possub);
        
      }
    })
    this.markersub = new google.maps.Marker({
      position:{
        lat: this.latsub,
        lng: this.lonsub
      },
      map: this.map,
      draggable: true,
      title:"Vị trí của bạn",
      clickable:true,
      
    })
    

    const infoWindow = new google.maps.InfoWindow({
      content: `<b>Tên: ${this.fullname}</b><br><p>số điện thoại: ${this.phone}</p><p>Vị trí hiện tại: ${this.possub}</p>`
    });
    this.markersub.addListener("click", () => {
    infoWindow.open(map, this.markersub);
    });
    
    



    
  }
  
  place:any;
  searchitems:any;
  content_maps =[
    {
      name:"Minh",
      phone:"0912345678",
    }
  ]
  loadMap(lat:any,lng:any){  

    const latLng = new google.maps.LatLng(this.lat,this.lng);
    console.log(this.lat,this.lng);
    
    const mapOptions ={
      center: {
        lat: lat,
        lng: lng
      }, 
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
    const marker = new google.maps.Marker({
      position:{
        lat: lat,
        lng: lng
      },
      map: this.map,
      draggable: true,
      title:"Vị trí của bạn",
      clickable:true,
      
    })
    const infoWindow = new google.maps.InfoWindow({
      content: `<b>Tên: ${this.content_maps[0].name}</b><br><p>số điện thoại: ${this.content_maps[0].phone}</p><p>Vị trí hiện tại: ${this.placesnow}</p>`
    });
    marker.addListener("click", () => {
    infoWindow.open(map, marker);
    });
    setTimeout(()=> {
      console.log(this.multimarker);

    },5000)
    
      const latLng2 = new google.maps.LatLng(this.latsub,this.lonsub);
      const markersub = new google.maps.Marker({
        position: latLng2,
        map: this.map,
        draggable: false,
        

      })
      const infoWindow2 = new google.maps.InfoWindow({
        content: `<b>Tên: ${this.fullname}</b><br><p>số điện thoại: ${this.phone}</p><p>Vị trí hiện tại: ${this.placesnow}</p>`
      });
      markersub.addListener("click", () => {
      infoWindow2.open(map, markersub);
      });
    google.maps.event.addListener(this.map, 'dragend', (event: any) => {
      const center = this.map.getCenter();
      this.lat = center.lat();
      this.lng = center.lng();
      console.log('Bản đồ đã được kéo đến vị trí:', center.lat(), center.lng());
      this.goong.getcurrentposition(center.lat(), center.lng(),this.apikey).subscribe(
        {
          next: (data: any) => {
            const searcthtml = <HTMLFormElement>document.getElementById('ionsearchbar');
            searcthtml.nodeValue= "";
            searcthtml.setAttribute('value',"");
            searcthtml.setAttribute('ng-reflect-model', '');

            console.log('abc',data);
            setTimeout(() => {
              this.zone.run(() => {
                console.log(data.results);
                this.place = data.results[0]
              });
            }, 500);
            console.log(this.place);
          }
        }
      )
    });
    this.map.addListener('center_changed', () => {
      marker.setPosition(this.map.getCenter());
    });

  }

  changemarker(pos:any){
    this.goong.getlatlngbyid(this.apikey,pos.place_id).subscribe({
      
      next:(response:any)=>{
          this.latdata = response.result.geometry.location.lat;
          this.lngdata = response.result.geometry.location.lng;
          console.log(this.latdata,this.lngdata);
        this.loadMap(response.result.geometry.location.lat, response.result.geometry.location.lng)
      },
      
      error:(error:any)=>{
        console.log(error);

      }
    })
  }
}
