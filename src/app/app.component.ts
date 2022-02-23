import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  checkin: any = {};

  constructor(public navCtrl: NavController,
    public http:HttpClient,public alertController: AlertController) 
    {
      
    }
    async ShowAlert() {
      const alert =await this.alertController.create({
        header: 'ออกจากระบบแล้ว',
        buttons:['OK']
      });
  
      await alert.present();
    }
  
}
