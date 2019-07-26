import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 database = firebase.database();
 userID
 userEmail
  constructor() { }

  login(email,password)
  {
   
    firebase.auth().signInWithEmailAndPassword(email,password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage)
    }).then((result)=>{

      console.log("user is logged in")
    });

  }
  signup(name,email,password)
  {
   
  
    firebase.auth().createUserWithEmailAndPassword(email,password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      // ...
      console.log(errorMessage)
    }).then((user)=>{
      
      console.log("user is registered");
       this.userID=user['user'].uid;
       this.userEmail=user['user'].email;

       firebase.database().ref('users/' + this.userID).set({
        username: name,
        email: email,
        password : password
      },(error)=> {
        if (error) {
          // The write failed...
          console.log(error)
        } else {
          // Data saved successfully!
          console.log("data stored")
        }
      });
    });
    
  }

  resetPassword(email)
  {
    
    firebase.auth().sendPasswordResetEmail(email).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorMessage)
      // ...
     
    }).then((result)=>{
      
      console.log("password reset is sent");
    });

  }

  
  logout()
  {
    firebase.auth().signOut().catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorMessage)
      // ...
     
    }).then((result)=>{
      
      console.log("user is logged out");
    });

  }

 

  
}
