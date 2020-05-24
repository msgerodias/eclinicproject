import { Component, OnInit } from '@angular/core';
import { EcservicesService} from 'src/app/services/ecservices.service';

@Component({
  selector: 'app-homereg',
  templateUrl: './homereg.component.html',
  styleUrls: ['./homereg.component.scss']
})
export class HomeregComponent implements OnInit{
  regForm = {
    fullName: '',
    pAddress: '',
    pContact: '',
    pEadd: '',
    pPassword: '',
    pConfirm: '',
  };

  submitted = false;

  constructor(private ecService: EcservicesService) { }

  ngOnInit(): void {
    
  }

  regUser() {
    const data = {
      fullName: this.regForm.fullName,
      pAddress: this.regForm.pAddress,
      pContact: this.regForm.pContact,
      pEadd:    this.regForm.pEadd,
      pPassword:this.regForm.pPassword,
      pConfirm: this.regForm.pContact
    }

    this.ecService.registerUser(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

      
    this.newTutorial();
  }

  newTutorial() {
    this.submitted = false;
    this.regForm = {
      fullName: '',
      pAddress: '',
      pContact: '',
      pEadd: '',
      pPassword: '',
      pConfirm: '',
    };
  }

}
