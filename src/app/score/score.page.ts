import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage  {

  

  // score : any = [];
  re1 : any = 3;
  // re2 : any;
  // re3 : any;
  // re4 : any;
  // re5 : any;
  // re6 : any;
  // re7 : any;
  // re8 : any;
  // re9 : any;
  // re10 : any;
  // result:any = [];
  
  // topscore : any = [];
  // tablename : string = "reviews_arrt";


  constructor(public navCtrl: NavController,
    public http:HttpClient) 
    { 
      // this.loaddata_score1(3);
      // this.loaddata_score2(4);
      // this.loaddata_score3(5);
      // this.loaddata_score4(6);
      // this.loaddata_score5(7);
      // this.loaddata_score6(8);
      // this.loaddata_score7(9);
      // this.loaddata_score8(10);
      // this.loaddata_score9(11);
      // this.loaddata_score10(12);
      // this.getTopScore();
      console.log("Hi");

    }

    // getTopScore(){
    //   let postData = JSON.stringify({
    //     table_name : tablename
    //   });
  
    //   let url: string = 'http://localhost/appdata/gettopscore.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.result = data;
    //     console.log("result : ",this.result);
    //   });
    // }

    

    // loaddata_score1(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re1 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
    // }

    // loaddata_score2(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re2 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
      
    // }

    // loaddata_score3(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re3 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
    // }

    // loaddata_score4(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re4 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
    // }

    // loaddata_score5(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re5 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
    // }

    // loaddata_score6(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re6 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
    // }

    // loaddata_score7(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re7 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
    // }

    // loaddata_score8(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re8 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
    // }

    // loaddata_score9(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re9 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
    // }

    // loaddata_score10(id:number)
    // {
    //   let postData = JSON.stringify({
    //     atrID: id
    //   });
  
    //   let url: string = 'http://localhost/appdata/loaddata_score.php';
    //   this.http.post(url,postData)    
    //   .subscribe(data => {
    //     this.score = data[0].result
    //     this.re10 = Math.round(this.score)
    //     console.log("score : ",Math.round(this.score));
    //   });
    // }

    // onRate(rate) {
    //   console.log(rate)
    //   this.rate = rate;
    // }



}
