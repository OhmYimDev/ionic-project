import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-review4',
  templateUrl: './review4.page.html',
  styleUrls: ['./review4.page.scss'],
})
export class Review4Page {
  
  review: any = {};
  data_review: any;
  username ;
  data_attr: any ;
  result: any ;
  score: any = {};
  count: any;
  reviews_id:any;

  constructor(public navCtrl: NavController,
    public http:HttpClient,public alertController: AlertController,public datapass:DatapassService) 
  { 
    this.review.comment = '';
    this.review.score = '';
    this.review.id_attr = 6;
    this.loaddata(6);  
    this.dataUser();
    this.loaddata_score(6);
    this.load_countreviews(6);
    this.review.name_attr = "วัดเจดีย์หลวงวรวิหาร";
  }

  insertdata(){
    this.username = this.datapass.username;
    if (this.review.username != '' && this.review.comment != '') 
    {
      let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/insert-review.php';
      let dataPost = new FormData();
      dataPost.append('username',this.username);
      dataPost.append('comment',this.review.comment);
      dataPost.append('id_attr',this.review.id_attr);
      dataPost.append('score',this.review.score);
      dataPost.append('name_attr',this.review.name_attr);


      let data:Observable<any> = this.http.post(url,dataPost);
      data.subscribe(data =>{
        this.ShowAlert();
        this.navCtrl.navigateBack("/chedi");

      });
    }
  }

  async ShowAlert() {
    const alert =await this.alertController.create({
      header: 'คุณได้ทำการรีวิวแล้ว',
      message: 'ขอบคุณสำหรับการรีวิว',
      buttons:['OK']
    });

    await alert.present();
  }

  loaddata(id:number)
  {
    let postData = JSON.stringify({
      atrID: id
    });
      
      let url = "https://www.comdept.cmru.ac.th/60143227/appdata/loaddata_review.php";
      this.http.post(url,postData)
      .subscribe(review => {
      if(review != null)
      {
        this.data_review = review
        console.log("done",this.data_review);
      }
    },error=>
    {
      console.log("load faile.");
    });
  }

  dataUser(){
    this.username = this.datapass.username;
    console.log("Username : ",this.username);
  }

  loaddata_score(id:number)
  {
    let postData = JSON.stringify({
      atrID: id
    });

    let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/loaddata_score.php';
    this.http.post(url,postData)    
    .subscribe(data => {
      this.score = data[0].result
      this.result = Math.round(this.score)
      console.log("score : ",Math.round(this.result));
    });
  }

  load_countreviews(id:number)
  {
    let postData = JSON.stringify({
      atrID: id
    });

    let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/loaddata_countreviews.php';
    this.http.post(url,postData)    
    .subscribe(data => {
      this.count = data[0].count
      console.log("Count reviews : ",this.count);
    });
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
    this.datapass.reviews_id = id;
    this.navCtrl.navigateForward('/edit-review');
    }

  deleteArticle(id:any){
    this.reviews_id = id;
    let formdata = new FormData();
    formdata.append('id_review',this.reviews_id); 
    let url:string = "https://www.comdept.cmru.ac.th/60143227/appdata/deleteReview.php";
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



