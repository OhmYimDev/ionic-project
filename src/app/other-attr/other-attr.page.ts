import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { DatapassService } from '../datapass.service';
import { AlertController, NavController  } from '@ionic/angular';

@Component({
  selector: 'app-other-attr',
  templateUrl: './other-attr.page.html',
  styleUrls: ['./other-attr.page.scss'],
})
export class OtherAttrPage {

  result:any = [];
  nameAttr:any;
  username:any;
  status:any ;
  arUsername:any;
  article_id:any;
 
  constructor(public navCtrl: NavController,
    public http:HttpClient,public alertController: AlertController,public datapass:DatapassService) {
    this.getData();
   }

  getData(){
    if(this.datapass.attr_name != null){
      console.log("Datapass :",this.datapass.attr_name);
      let formdata = new FormData();
      formdata.append('nameAttr',this.datapass.attr_name); 
      let url:string = "https://www.comdept.cmru.ac.th/60143227/appdata/loaddata_imagename.php";
      let data:Observable<any> = this.http.post(url,formdata);
      data.subscribe(data => {
        this.result = data;
        console.log("Data articles :",this.result);
      });
    }else{
      console.log("Datapass is null.");
    }
  }

  checkUser(arusername:any){
    this.username = this.datapass.username;
    console.log("Check user form datapass :",this.username);
    if(arusername == this.username){
      return true
      console.log("arUsername == username",arusername,this.username);
    }else{
      return false
      console.log("arUsername != username");
    }
  }

  editArticle(id:any){
    this.datapass.articles_id = id;
    this.navCtrl.navigateForward('/edit-article');
    }

  deleteArticle(id:any){
    this.article_id = id;
    let formdata = new FormData();
    formdata.append('id_article',this.article_id); 
    let url:string = "https://www.comdept.cmru.ac.th/60143227/appdata/deleteArticle.php";
    let data:Observable<any> = this.http.post(url,formdata);
    data.subscribe(data => {
      this.presentAlert();
      this.navCtrl.navigateForward('/main');
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ลบรีวิวสำเร็จ',
      message: '',
      buttons: ['OK'],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
