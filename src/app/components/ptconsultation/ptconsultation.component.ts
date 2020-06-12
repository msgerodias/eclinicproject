import { Component, OnInit } from '@angular/core';
import { EcservicesService} from 'src/app/services/ecservices.service';

@Component({
  selector: 'app-ptconsultation',
  templateUrl: './ptconsultation.component.html',
  styleUrls: ['./ptconsultation.component.scss'],
  providers: [EcservicesService]
})
export class PtconsultationComponent implements OnInit {
  doctors;
  booking;

  constructor(private api: EcservicesService) {
    this.getAllDoctors();
    this.booking = {id:-1, did:'', pid:1, complaints:'', remarks:''}
  }

  getAllDoctors = () =>{
    this.api.getDoctorsList().subscribe(
      data => {
        this.doctors = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  createBooking = () =>{
    this.api.ptBookConsultation(this.booking).subscribe(
      data => {
        //this.booking.push(data);
        this.booking = {did:'', pid:1, complaints:'', remarks:''}
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
