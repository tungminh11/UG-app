import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,
     ],
  providers: [Camera,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},provideHttpClient(),HTTP],
  bootstrap: [AppComponent],
})
export class AppModule {}
