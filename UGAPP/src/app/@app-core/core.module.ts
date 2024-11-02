import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from './http/auth';
import { LoadingService } from './http/loading';
import { GoongService } from './http/goong';
import { WeatherService } from './http/weather api';
import { RegisterService } from './http/register';
import { AuthenticationService } from './http/authenservice';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthserviceService,
    LoadingService,
    GoongService,
    WeatherService,
    RegisterService,
    AuthenticationService
  ]
})
export class CoreModule { }
