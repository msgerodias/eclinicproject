import { Component, OnInit, ViewChild } from '@angular/core';
import { EcservicesService} from 'src/app/services/ecservices.service';

@Component({
  selector: 'app-drbooking',
  templateUrl: './drbooking.component.html',
  styleUrls: ['./drbooking.component.scss'],
  providers: [EcservicesService]
})
export class DrbookingComponent implements OnInit {
  bookings;

  constructor(private api: EcservicesService) {
    this.openBookingPage();
  }

  openBookingPage = () =>{
    this.api.drOpenBookingPage().subscribe(
      data => {
        this.bookings = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  openBooking = (booking) =>{
    this.api.drOpenPatientBooking(booking.id).subscribe(
      data => {
        //open info in new page
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
