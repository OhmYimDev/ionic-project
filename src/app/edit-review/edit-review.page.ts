import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DatapassService } from '../datapass.service';


@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.page.html',
  styleUrls: ['./edit-review.page.scss'],
})
export class EditReviewPage {

  review:any;
  comment:any;
  score:any;
  id_review:any;

  constructor(public navCtrl: NavController,
    public http:HttpClient,
    public alertController: AlertController,
    public datapass:DatapassService)
    {
      this.loadArticles();
      console.log("ID review :",this.id_review);
     }

    loadArticles(){
      if(this.datapass.reviews_id != null){
        let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/loadReview.php';
        let formData = new FormData();
        formData.append('id_review',this.datapass.reviews_id);
        let data:Observable<any> = this.http.post(url, formData);
        data.subscribe(data =>{
          this.review = data
          this.comment = data[0].comment
          this.score = data[0].score
          this.id_review = data[0].id_reviews
          console.log('Review : ',this.review);
        });
      }else{
        console.log('ID review is null.');
      }
    }

    updateReview(){
      let formData = new FormData();
      formData.append('comment', this.comment);
      formData.append('id_review', this.id_review);
      formData.append('score', this.score);
      let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/updateReview.php';
      let data:Observable<any> = this.http.post(url, formData);
      data.subscribe(data =>{
        this.presentAlert();
        this.navCtrl.navigateForward('/main');
      });

    }

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


  




}
