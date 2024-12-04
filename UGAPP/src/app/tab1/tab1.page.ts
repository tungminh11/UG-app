import { Component } from '@angular/core';
import { WeatherService } from '../@app-core/http/weather api';
import { GoongService } from '../@app-core/http/goong'; 
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { LoadingService } from '../@app-core/http/loading';
import { SocketService } from '../@app-core/http/socket';
import { ActivatedRoute } from '@angular/router';
import { DiseaseService } from '../@app-core/http/disease';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
public placesid:string | undefined;
latnew:any;
lngnew:any;
mainweather:any;
weatherfunc:any;
country:any;
namecountry:any;
description:any;
temp:any;
humidity:any;
sea_level:any;
apikey = "mfFQoTbrNMiUyi5xL5ljfl68MmUbQIAFnWH0NgyX";
placesnow:any;
checkData:any = false;
currentps:any;
token:any;
diseaseReport: any;
formattedMonth: any;
currentMonthReport: any; // Dữ liệu của tháng hiện tại

  constructor(
    public loading: LoadingService,
    private weather:WeatherService,
    private goong:GoongService,
    private router:Router,
    private socket:SocketService,
    private route:ActivatedRoute,
    private diseaseReportService: DiseaseService
  ) {}

  ngOnInit(){  
    this.currentMonthReport = this.diseaseReportService.getDiseaseReportByCurrentMonth();
    console.log(this.currentMonthReport);
    
// To retrieve the token later
    const dataget = this.route.snapshot.queryParamMap.get('data');
    this.newdata = dataget;
    const dataobj = JSON.parse(this.newdata);
    this.token = dataobj;
    localStorage.setItem('authToken', this.token.token);  
    const tokenauth = localStorage.getItem('authToken');

    console.log(tokenauth);
    const currentposition = async ()=>{
      const coordinates = await Geolocation.getCurrentPosition();


      this.latnew = coordinates.coords.latitude;
      this.lngnew = coordinates.coords.longitude;
      this.goong.getcurrentposition(this.apikey,this.latnew,this.lngnew).subscribe({
        next:(res)=>{
          console.log(res);
          this.currentps = res;
          this.placesnow = res.results[0].formatted_address;
          console.log(this.placesnow);
          this.checkData = true;
          this.funcCheckdata()
          this.loading.dismiss()
                
        },
        error:(err)=>{
          console.log(err);
        }
      })
    };
    currentposition();
    this.getDataFromApi();
    console.log(this.latnew);

    
    this.socket.connect(this.token.token);
    console.log(this.socket.connect(this.token.token));
    
  }
  newdata:any;
  data_getapi:any;
  
  async getDataFromApi(): Promise<any> {
    try {
      const token = localStorage.getItem('authToken'); // Thay thế bằng token thực tế
  
      const response = await fetch('http://localhost:8080/api/v1/addressSOS', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Thêm Bearer token vào header
          'Content-Type': 'application/json', // Nếu cần thiết
        }
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText} (Status code: ${response.status})`);
      }
      this.data_getapi = await response.json();
      console.log('Fetched data:', this.data_getapi);
      return this.data_getapi;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  ionViewDidEnter(){
    this.weather.getWeather(this.latnew,this.lngnew).subscribe({
      next: (data) => {
        console.log(data);
        
        this.temp = data.main.temp;
        this.humidity = data.main.humidity;
        this.sea_level = data.main.sea_level;

        console.log(this.mainweather);
        this.description = data.weather[0].description;
        this.country = data.sys.country;
        this.namecountry = data.name;
        this.loading.dismiss()        

      },
      error: (err)=>{
        console.log(err);
      }
    })

  }
  funcCheckdata(){
    if(this.checkData == true){
      this.loading.dismiss();
    }
    else{
      this.loading.presentLoading();
    }
  }
  // datafake:any = [
  //   {
  //     text:"text1"
  //   },
  //   {
  //     text:"akjfbasiaksdsa"
  //   },
  //   {
  //     text:"akjfbasiaksdsa"
  //   },
  //   {
  //     text:"akjfbasiaksdsa"
  //   },
  //   {
  //     text:"akjfbasiaksdsa"
  //   }

  // ]
  // dataget:any= this.datafake.slice(0,3);
  ShowSOS(){
    const token:any = localStorage.getItem('authToken'); // Thay thế bằng token thực tế

    this.socket.connect(token)
   
    this.router.navigate(['/tabs/tab2'])
  
     const dataLatLng = {
     lat:this.currentps.results[0].geometry.location.lat,
   lng:this.currentps.results[0].geometry.location.lng
   } 
      this.socket.sendMessage( token,{lat:dataLatLng.lat,lon:dataLatLng.lng})

    // const queryParams:any  ={}
    // // const datapush = this.currentps.results[0].place_id
    // queryParams.data = JSON.stringify(dataLatLng);
    // this.router.navigate(['/tabs/tab2'],{
    //   queryParams:{
    //     data: JSON.stringify(dataLatLng)
    //   }
    // })
    
  }

}



