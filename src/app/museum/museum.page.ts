import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.page.html',
  styleUrls: ['./museum.page.scss'],
})
export class MuseumPage {

  data_attr: any ;
  result: any ;
  score: any ;
  count: any;

  constructor(public navCtrl: NavController,public http:HttpClient) 
  { 
    this.loaddata(8);  
    this.loaddata_score(8);
    this.load_countreviews(8);
  }

  openLinkInSystemBrowser(url:string){
    window.open(url, '_system', 'location-yes');
  }


  loaddata(id:number){
    let postData = JSON.stringify({
      atrID: id
    });

    let url = "https://www.comdept.cmru.ac.th/60143227/appdata/loaddata.php";
    this.http.post(url,postData)
    .subscribe(data => 
      {
        if(data != null)
        {
          this.data_attr = data
          console.log("done",this.data_attr);
        }
      },error=>
      {
        console.log("load faile.");
      });
  }

  loaddata_score(id:number)
  {
    let postData = JSON.stringify({
      atrID: id
    });

    let url: string = 'http://localhost/appdata/loaddata_score.php';
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

    let url: string = 'http://localhost/appdata/loaddata_countreviews.php';
    this.http.post(url,postData)    
    .subscribe(data => {
      this.count = data[0].count
      console.log("Count reviews : ",this.count);
    });
  }





}
