import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { DatapassService } from '../datapass.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.page.html',
  styleUrls: ['./edit-article.page.scss'],
})
export class EditArticlePage {

  username: any;
  articles:any = [];
  re:any =[];

  attr_name: any;
  location: any;
  header: any;
  detail: any;
  id_article:any;

  
  constructor(public navCtrl: NavController,
    public http:HttpClient,public alertController: AlertController,public datapass:DatapassService) {
     this.loadArticles();
    }
    
    loadArticles(){
      if(this.datapass.articles_id != null){
        let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/loadArticle.php';
        let formData = new FormData();
        formData.append('id_article',this.datapass.articles_id);
        let data:Observable<any> = this.http.post(url, formData);
        data.subscribe(data =>{
          this.articles = data
          this.attr_name = data[0].attr_name
          this.location = data[0].locationn
          this.header = data[0].header
          this.detail = data[0].detail
          this.id_article = data[0].id_article
          console.log('Articles : ',this.articles);
        });
      }else{
        console.log('ID article is null.');
      }
    }

    editArticle(){
      console.log(this.attr_name);
      console.log(this.location);
      console.log(this.header);
      console.log(this.detail);
      let formData = new FormData();
      formData.append('attrName', this.attr_name);
      formData.append('location', this.location);
      formData.append('header', this.header);
      formData.append('detail', this.detail);
      formData.append('id_article', this.id_article);
      let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/updateArticle.php';
      let data:Observable<any> = this.http.post(url, formData);
      data.subscribe(data =>{
        this.presentAlert();
        this.navCtrl.navigateForward('/main');
      });

    }
    

    selectedFile(event){
      this.re.img = event.target.files[0];
    }



  // onClick()
  // {
  //   this.username = this.datapass.username;
  //     let formData = new FormData();
  //     formData.append('image', this.re.img);
  //     formData.append('attrName', this.re.attrName);
  //     formData.append('location', this.re.location);
  //     formData.append('header', this.re.header);
  //     formData.append('detail', this.re.detail);
  //     formData.append('username', this.username);
  
  //     let url: string = 'http://localhost/appdata/upload_image.php';
  //     let data:Observable<any> = this.http.post(url, formData);
  //     data.subscribe(data =>{
  //         this.presentAlert();
  //         this.navCtrl.navigateForward('/main');});
  // }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แก้ไขรีวิวสำเร็จ',
      message: '',
      buttons: ['OK'],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  //   await alert.present();
  //   let result = await alert.onDidDismiss();
  //   console.log(result);
  // }

}
