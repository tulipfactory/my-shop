import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 
  
  password: string = "";
  email: string = "";

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  signIn(){
    this.service.signIn
    (this.email, this.password)
  }
}
