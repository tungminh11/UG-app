import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from './http/auth';
import { LoadingService } from './http/loading';
import { GoongService } from './http/goong';
import { WeatherService } from './http/weather api';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthserviceService,
    LoadingService,
    GoongService,
    WeatherService
  ]
})
export class CoreModule { }
