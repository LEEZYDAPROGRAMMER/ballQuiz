import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 database = firebase.database();
 userID
 userEmail
 data:string=""
  constructor() { }


  rtE()
  {

   return this.data
  }
  login(email,password)
  {
   
  return  firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{

      console.log("user is logged in")
      return result
    }).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage)
      
      return errorMessage
    });

  }
  signup(name,email,password)
  {
   
  
  return  firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
      
      console.log("user is registered");
       this.userID=user['user'].uid;
       this.userEmail=user['user'].email;
      
       firebase.database().ref('users/' + this.userID).set({
        username: name,
        email: email,
        password : password

      });
 return user
    }).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
     return errorMessage
      // ...
      console.log(errorMessage)
      this.data=errorMessage
      console.log(this.data)
     
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
