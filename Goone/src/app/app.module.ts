import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

// import { Facebook } from '@ionic-native/facebook/ngx';
import { HttpConfigInterceptor } from './interceptors/httpconfig.interceptor';
import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    HttpClientModule, 
    AppRoutingModule],
  providers: [HTTP, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true
  }, AlertController, LoadingController],
  bootstrap: [AppComponent],
})
export class AppModule {}
