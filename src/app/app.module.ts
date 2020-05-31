import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeregComponent } from './components/homereg/homereg.component';
import { PtnavComponent } from './components/ptnav/ptnav.component';
import { DrnavComponent } from './components/drnav/drnav.component';
import { PtconsultationComponent } from './components/ptconsultation/ptconsultation.component';
import { PtmessageComponent } from './components/ptmessage/ptmessage.component';
import { PthistoryComponent } from './components/pthistory/pthistory.component';
import { PtprofileComponent } from './components/ptprofile/ptprofile.component';
import { DrbookingComponent } from './components/drbooking/drbooking.component';
import { DrconsultationComponent } from './components/drconsultation/drconsultation.component';
import { DrmrecordComponent } from './components/drmrecord/drmrecord.component';
import { DrmessageComponent } from './components/drmessage/drmessage.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DrprofileComponent } from './components/drprofile/drprofile.component';
import { PtmsginboxComponent } from './components/ptmsginbox/ptmsginbox.component';
import { PtmsgcreateComponent } from './components/ptmsgcreate/ptmsgcreate.component';
import { PtmsgsentComponent } from './components/ptmsgsent/ptmsgsent.component';

//HTTPS module
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeregComponent,
    PtnavComponent,
    DrnavComponent,
    PtconsultationComponent,
    PtmessageComponent,
    PthistoryComponent,
    PtprofileComponent,
    DrbookingComponent,
    DrconsultationComponent,
    DrmrecordComponent,
    DrmessageComponent,
    LogoutComponent,
    DrprofileComponent,
    PtmsginboxComponent,
    PtmsgcreateComponent,
    PtmsgsentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }