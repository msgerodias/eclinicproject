import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; //login page
import { HomeregComponent } from './components/homereg/homereg.component'; //registration page

//patient module
import { PtnavComponent } from './components/ptnav/ptnav.component';
  import { PtconsultationComponent } from './components/ptconsultation/ptconsultation.component'; //book a consultation page
  import { PthistoryComponent } from './components/pthistory/pthistory.component'; //view patient medical history
  import { PtprofileComponent } from './components/ptprofile/ptprofile.component'; //patient information
  import { PtmessageComponent } from './components/ptmessage/ptmessage.component'; //private messages - inbox, create, sent

    //--patient message module
    import { PtmsginboxComponent } from './components/ptmsginbox/ptmsginbox.component'; //private messages - inbox, create, sent
    import { PtmsgsentComponent } from './components/ptmsgsent/ptmsgsent.component'; //private messages - inbox, create, sent
    import { PtmsgcreateComponent } from './components/ptmsgcreate/ptmsgcreate.component'; //private messages - inbox, create, sent


//doctor module
import { DrnavComponent } from './components/drnav/drnav.component';
import { DrbookingComponent } from './components/drbooking/drbooking.component'; //patient booking list for consultation
import { DrconsultationComponent } from './components/drconsultation/drconsultation.component'; //scheduled consultation - confirmed from booking page
import { DrmessageComponent } from './components/drmessage/drmessage.component'; //private messages - onbox, create, sent
import { DrmrecordComponent } from './components/drmrecord/drmrecord.component'; //medical records of patients
import { DrprofileComponent } from './components/drprofile/drprofile.component'; //doctor information

    //--patient message module
    import { DrmsginboxComponent } from './components/drmsginbox/drmsginbox.component'; //private messages - inbox, create, sent
    import { DrmsgsentComponent } from './components/drmsgsent/drmsgsent.component'; //private messages - inbox, create, sent
    import { DrmsgcreateComponent } from './components/drmsgcreate/drmsgcreate.component'; //private messages - inbox, create, sent

const routes: Routes = [
  { path: 'login-component', component: LoginComponent }, //login page
  { path: '', component: HomeregComponent }, //registration page is home page
  { path: 'patient', component: PtnavComponent, //user is a patient
      children:[
        {path: '', component: PtconsultationComponent},
        {path: 'consult', component: PtconsultationComponent},
        {path: 'history', component: PthistoryComponent},
        {path: 'profile', component: PtprofileComponent},
        {path: 'message', component: PtmessageComponent,
            children:[
              {path: '', component: PtmsginboxComponent},
              {path: 'inbox', component: PtmsginboxComponent},
              {path: 'sent', component: PtmsgsentComponent},
              {path: 'create', component: PtmsgcreateComponent}
            ]}
      ]
  },
  { path: 'doctor', component: DrnavComponent, //user is a doctor
      children:[
        {path: '',component: DrbookingComponent},
        {path: 'booking', component: DrbookingComponent},
        {path: 'consultation', component: DrconsultationComponent},
        {path: 'record', component: DrmrecordComponent},
        {path: 'profile', component: DrprofileComponent},
        {path: 'message', component: DrmessageComponent,
            children:[
              {path: '', component: DrmsginboxComponent},
              {path: 'inbox', component: DrmsginboxComponent},
              {path: 'sent', component: DrmsgsentComponent},
              {path: 'create', component: DrmsgcreateComponent}
            ]}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
