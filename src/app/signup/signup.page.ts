import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signup: any = {};

  constructor(public navCtrl: NavController, 
    public http: HttpClient,public alertController: AlertController) {
    this.signup.username = '';
    this.signup.password = '';
  }
  

  Signup() {
    if (this.signup.username != '' && this.signup.password != '') {
      console.log('Username :', this.signup.username);
      console.log('password :', this.signup.password);
      let url1: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/check_register.php';
      let url2: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/sign_up.php';

      let dataPost1 = new FormData();
      let dataPost2 = new FormData();
      dataPost1.append('username',this.signup.username);
      dataPost2.append('username',this.signup.username);
      dataPost2.append('password',this.signup.password);
      dataPost2.append('firstname',this.signup.firstname);
      dataPost2.append('lastname',this.signup.lastname);
      dataPost2.append('phonenumber',this.signup.phonenumber);


      let data:Observable<any> = this.http.post(url1,dataPost1);
      data.subscribe(data =>{
        if(data == null){
          let data:Observable<any> = this.http.post(url2,dataPost2);
          
          data.subscribe(data =>{
            this.ShowAlert();
            this.navCtrl.navigateForward('/login');});
          
        }else{
          this.presentAlert();
        }
      });

    } 
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Register Failed',
      message: 'This username is already in use.',
      buttons: ['OK'],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async ShowAlert() {
    const alert =await this.alertController.create({
      header: 'You are registered',
      message: 'Please login',
      buttons:['OK']
    });

    await alert.present();
  }

}
