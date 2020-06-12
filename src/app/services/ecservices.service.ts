import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const clinicDB = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class EcservicesService {
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(private http: HttpClient) { }

  login(data){
    // --- //
  }

  //Register user to database
  registerUser(data){
    return this.http.post(clinicDB,data);
  }

//------------------ PATIENT --------------------//

  //Patient book a consultation
  ptBookConsultation(booking){
    const book = {did: booking.did, pid:booking.pid, complaints:booking.complaints, remarks:booking.remarks}
    return this.http.post(clinicDB + '/booking/', booking, {headers:this.httpHeaders});
  }

  //Patient create new message
  ptCreateNewMessage(data){
    return this.http.post(clinicDB,data);
  }

  //Patient open message inbox
  ptOpenInbox(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Patient open a message in inbox
  ptOpenInboxMessage(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Patient open sent items
  ptOpenSentBox(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Patient open a message in sentbox
  ptOpenSentMessage(id){
    return this.http.get(`${clinicDB}/${id}`);
  }
  
  //Patient open Medical History
  ptOpenMedicalHistory(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Patient open a medical record
  ptOpenMedicalRecord(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Patient open profile
  ptOpenProfile(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Patient update profile
  ptUpdateProfile(id, data){
    return this.http.put(`${clinicDB}/${id}`, data);
  }

  //------------------ OTHER FUNCTIONS --------------------//

  //Doctor open booking page
  getDoctorsList(): Observable<any>{
    return this.http.get(clinicDB + '/doctor/', {headers:this.httpHeaders});
  }

//------------------ DOCTOR --------------------//

  //Doctor open booking page
  drOpenBookingPage(): Observable<any>{
    return this.http.get(clinicDB + '/booking/', {headers:this.httpHeaders});
  }

  //Doctor open a patient booking from list
  drOpenPatientBooking(id){
    return this.http.get(clinicDB + '/booking/' + id + '/', {headers:this.httpHeaders});
  }

  //Doctor update a booking status
  //confirmed/not confirmed
  //if ok, set time
  drUpdateBookingStatus(id, data){
    return this.http.put(`${clinicDB}/${id}`, data);
  }

  //Doctor open for Consultation page
  //list of CONFIRMED booking
  drOpenConsultationPage(){
    return this.http.get(clinicDB);
  }

  //Doctor a confirmed booking to start online consultation
  drOpenConfirmedBooking(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Doctor save patient consultation details
  drSavePatientConsultation(id, data){
    return this.http.put(`${clinicDB}/${id}`, data);
  }

  //Doctor create new message
  drCreateNewMessage(data){
    return this.http.post(clinicDB,data);
  }
  
  //Doctor open message inbox
  drOpenInbox(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Doctor open a message in inbox
  drOpenInboxMessage(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Doctor open sent items
  drOpenSentBox(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Doctor open a message in sentbox
  drOpenSentMessage(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Doctor open Patient History Page
  drOpenPatientHistory(){
    return this.http.get(clinicDB);
  }

  //Doctor open a Patient Record
  //in list order by consultation date
  drOpenPatientRecord(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Doctor select a consultation
  drOpenPatientConsultation(id){
    return this.http.get(`${clinicDB}/${id}`);
  }

  //Doctor update patient record
  drUpdatePatientRecord(id,data){
    return this.http.put(`${clinicDB}/${id}`, data);
  }

  //Doctor search a patient/patients
  //-------to follow--------
}
