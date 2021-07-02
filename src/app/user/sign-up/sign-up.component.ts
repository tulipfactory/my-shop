import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

name = "";
phone = "";
password= "";
email = "";

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  signUp(){
    this.service.signUp
    (this.email, this.password, this.name, this.phone)
  }
}
