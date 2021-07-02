import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'; 

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    public afAuth: AngularFireAuth, public router: Router, private db: AngularFirestore // Inject Firebase auth service
  ) { 
  }

  // Sign up with email/password
  signUp(email: string, password: string, name: string, phone: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
        this.db.collection("users").add({
          email: email,
          name: name,
          phone: phone,
        }) .then(function(){
          console.log("it works")
        }) //creates a collection of users
        this.router.navigate(["signin"])
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
