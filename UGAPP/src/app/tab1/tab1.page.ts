import { Component } from '@angular/core';
import { WeatherService } from '../@app-core/http/weather api';
import { GoongService } from '../@app-core/http/goong'; 
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
apikey = "moh7iGN6X9muXFV9wcXkwFSi5xj7CeSJYzwBM98Q";
placesnow:any;
checkData:any = false;
  constructor(
    private weather:WeatherService,
    private goong:GoongService
  ) {}
  ngOnInit(){
    
    const currentposition = async ()=>{
      const coordinates = await Geolocation.getCurrentPosition();
      
      this.latnew = coordinates.coords.latitude;
      this.lngnew = coordinates.coords.longitude;
      this.goong.getcurrentposition(this.apikey,this.latnew,this.lngnew).subscribe({
        next:(res)=>{
          console.log(res);
          this.placesnow = res.results[0].formatted_address;
          console.log(this.placesnow);
          
                
        },
        error:(err)=>{
          console.log(err);
        }
      })
    };
    currentposition();

  }
  ionViewDidEnter(){
    

  
    this.weather.getWeather(22.7728753,104.9166406).subscribe({
      next: (data) => {
        console.log(data);
        this.temp = data.main.temp;
        this.humidity = data.main.humidity;
        this.sea_level = data.main.sea_level;

        console.log(this.mainweather);
        this.description = data.weather[0].description;
        this.country = data.sys.country;
        this.namecountry = data.name;

      },
      error: (err)=>{
        console.log(err);
      }
    })
    const blockdisplay:any  = document.getElementById("color-wn") as HTMLDivElement;
    const text:any = document.querySelectorAll("text-color");
    blockdisplay.style.backgroundColor = "rgb(162, 0, 255)"
    if(blockdisplay.style.backgroundColor == "rgb(225, 255, 0)"){
      blockdisplay.style.backgroundColor = "rgb(244, 255, 163)";
      for(let i=0;i<text.length;i++){
        text[i].style.color = "black !important";
      }
    }
    else if(blockdisplay.style.backgroundColor == "rgb(255, 255, 255)"){
      blockdisplay.style.backgroundColor = "rgb(225, 255, 0)";
      for(let i=0;i<text.length;i++){
        text[i].style.color ="black "
      }
    }
    else if(blockdisplay.style.backgroundColor == "rgb(255, 0, 0)"){
      blockdisplay.style.backgroundColor = "rgb(225, 255, 0)";
      for(let i=0;i<text.length;i++){
        text[i].style.color ="black "
      }
    }
    else if(blockdisplay.style.backgroundColor == "rgb(162, 0, 255)"){
      blockdisplay.style.backgroundColor = "rgb(162, 0, 255)";
      for(let i=0;i<text.length;i++){
        text[i].style.color ="black "
      }
    }
  
  }
  datafake:any = [
    {
      text:"text1"
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
  ShowSOS(){
    console.log("vao");
    
  }

}



