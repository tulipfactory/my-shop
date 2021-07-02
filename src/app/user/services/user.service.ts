import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    public afAuth: AngularFireAuth, public router: Router // Inject Firebase auth service
  ) { 
  }

  // Sign up with email/password
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message) //functions should be lowercase in the 1st word
        //so they dont get confused with classes
      })
  }

  // Sign in with email/password
  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.router.navigate(['products']);
      }).catch((error) => {
        window.alert("The email/password you entered is invalid.")
        console.log(error)
      })
  }
}
