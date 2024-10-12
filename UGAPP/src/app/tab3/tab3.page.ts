import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public router: Router
  ) {}
  datainfo:any= [
    {
      "adress": "https://dantri.com.vn/suc-khoe/lan-song-covid-19-moi-tang-nhanh-tren-toan-cau-dich-tai-viet-nam-ra-sao-20240122114510596.htm",
      "title": "Làn sóng COVID-19 mới tăng nhanh trên toàn cầu, tại Việt Nam?",
      "type":"Dịch Bệnh"
    },
    {
      "adress": "https://dantri.com.vn/suc-khoe/lan-song-covid-19-moi-tang-nhanh-tren-toan-cau-dich-tai-viet-nam-ra-sao-20240122114510596.htm",
      "title": "Làn sóng COVID-19 mới tăng nhanh trên toàn cầu, tại Việt Nam?",
      "type":"Dịch Bệnh"
    },
    {
      "adress": "https://dantri.com.vn/suc-khoe/lan-song-covid-19-moi-tang-nhanh-tren-toan-cau-dich-tai-viet-nam-ra-sao-20240122114510596.htm",
      "title": "Làn sóng COVID-19 mới tăng nhanh trên toàn cầu, tại Việt Nam?",
      "type":"Dịch Bệnh"
    },
    {
      "adress": "https://vnexpress.net/dong-dat-rung-lac-nhieu-tinh-mien-trung-tay-nguyen-4774889.html",
      "title": "Động đất rung lắc nhiều tỉnh miền Trung, Tây Nguyên",
      "type":"Thiên Tai"
    },
    {
      "adress": "https://laodong.vn/xa-hoi/bao-lu-nam-2020-khien-mien-trung-thiet-hai-hon-36000-ti-dong-978153.ldo",
      "title": "Bão, lũ năm 2020 khiến miền Trung thiệt hại hơn 36.000 tỉ đồng",
      "type":"Thiên Tai"
    },

  ]
  gotodetail(){
    this.router.navigate(['/tabs/tab3/detail'])
  }

}
