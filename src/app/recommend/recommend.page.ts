import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { DatapassService } from '../datapass.service';
import { Observable} from 'rxjs';




@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.page.html',
  styleUrls: ['./recommend.page.scss'],
})
export class RecommendPage{

  re: any = {};
  username: any;
  articles:any;

  constructor(public navCtrl: NavController,
    public http:HttpClient,public alertController: AlertController,public datapass:DatapassService) { }

  selectedFile(event){
    this.re.img = event.target.files[0];
  }

  onClick()
  {
    this.username = this.datapass.username;
      let formData = new FormData();
      formData.append('image', this.re.img);
      formData.append('attrName', this.re.attrName);
      formData.append('location', this.re.location);
      formData.append('header', this.re.header);
      formData.append('detail', this.re.detail);
      formData.append('username', this.username);
  
      let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/upload_image.php';
      let data:Observable<any> = this.http.post(url, formData);
      data.subscribe(data =>{
          this.presentAlert();
          this.navCtrl.navigateForward('/main');});
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'รีวิวสำเร็จ',
      message: 'ขอบคุณสำหรับการรีวิว',
      buttons: ['OK'],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  editArticles(){
    if(this.datapass.articles_id != null){
      let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/editReviews.php';
      let formData = new FormData();
      formData.append('id_',this.datapass.articles_id);
      let data:Observable<any> = this.http.post(url, formData);
      data.subscribe(data =>{
        this.articles = data
        console.log('Articles : ',this.articles);
      });

    }
  }

  


}
