import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../UserService/user-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import {FormControl,FormGroup} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  name
  email
  password
 
  
passForm
  
patterns="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!%*?&]).{8,}"
  
 
  constructor(public user:UserServiceService,public alertController: AlertController,public toastController: ToastController,public route: Router,formBuilder : FormBuilder) 
   {
    this.passForm=formBuilder.group(
      {
            
            email: ['',Validators.email],
            password: ['',Validators.pattern(this.patterns)],
           name: ['', Validators.pattern('[a-zA-Z]*')]
       });
  
   }
   signup()
   {
      this.user.signup(this.name,this.email,this.password).then((user)=>{

  if(user.operationType=="signIn")
    {
         
      this.route.navigate(['/login'])   
   this.presentToast()
        
    }
    else
    {

          this.presentAlert(user)

    }
      })
     //
    
  
    
   
  

      this.name=null;
      this.email=null;
      this.password=null;

    }

  ngOnInit() {
  }
  
  //user error
  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: 'Bad Credentials',
      subHeader: 'Error',
      message:  data,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  //user registered msg
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You have successfully registered',
      duration: 2000,
      color: "primary"
    });
    toast.present();
  }

 
}
