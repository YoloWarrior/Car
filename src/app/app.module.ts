import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarCardModule } from './shared/components/car-card/car-card.module';
import { CarInfoModule } from './shared/components/car-info/car-info.module';
import { VirtualScrollModule } from './shared/components/virtual-scroll/virtual-scroll.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDkxMYCfijf3KJ1J-p6WfA0zAa1r9yK8hc',
  authDomain: 'car-proj-9c1de.firebaseapp.com',
  databaseURL:
    'https://car-proj-9c1de-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'car-proj-9c1de',
  storageBucket: 'car-proj-9c1de.appspot.com',
  messagingSenderId: '76912380627',
  appId: '1:76912380627:web:c1369bd62f37d58cd36226',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CarCardModule,
    CarInfoModule,
    VirtualScrollModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
