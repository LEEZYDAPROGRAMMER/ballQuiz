import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyA-0_Yvi60wEO3KtqM17AC51_x7gWj67mM",
  authDomain: "ballquizdb.firebaseapp.com",
  databaseURL: "https://ballquizdb.firebaseio.com",
  projectId: "ballquizdb",
  storageBucket: "",
  messagingSenderId: "580358878127",
  appId: "1:580358878127:web:8fb6a0db4f665d71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
