import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WeareglintComponent } from './weareglint/weareglint.component';
import { MaterialsComponent } from './materials/materials.component';
import { RecentworksComponent } from './recentworks/recentworks.component';
import { PhotosComponent } from './photos/photos.component';
import { OurclientsComponent } from './ourclients/ourclients.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    WeareglintComponent,
    MaterialsComponent,
    RecentworksComponent,
    PhotosComponent,
    OurclientsComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    NgxHideOnScrollModule,

   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
