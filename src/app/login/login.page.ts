import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  login: any = {};

  constructor(public navCtrl: NavController, 
    public http: HttpClient,public alertController: AlertController,public datapass:DatapassService) {
    this.login.username = '';
    this.login.password = '';
  }
  

  Login() {
    if (this.login.username != '' && this.login.password != '') {
      console.log('Username :', this.login.username);
      console.log('Password :', this.login.password);

      let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/login.php';
      let dataPost = new FormData();
      dataPost.append('user',this.login.username);
      dataPost.append('pass',this.login.password);

      let data:Observable<any> = this.http.post(url,dataPost);
      data.subscribe(data =>{
        if(data != null){
          this.datapass.id_user = data[0].id_user;
          this.datapass.username = data[0].username;
          // this.ShowAlert();
          this.navCtrl.navigateForward('/main');
          console.log("IdUser :",this.datapass.id_user);
          console.log("Username :",this.datapass.username);
          
        }else{
          this.presentAlert();
        }
      });

    } 
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'เข้าสู่ระบบล้มเหลว',
      message: 'ชื่อ หรือ รหัสผ่านไม่ถูกต้อง',
      buttons: ['OK'],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async ShowAlert() {
    const alert =await this.alertController.create({
      header: 'เข้าสู่ระบบแล้ว',
      message: 'ขอให้สนุกกับการท่องเที่ยว',
      buttons:['OK']
    });

    await alert.present();
  }



}
