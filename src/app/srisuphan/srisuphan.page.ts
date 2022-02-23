import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-srisuphan',
  templateUrl: './srisuphan.page.html',
  styleUrls: ['./srisuphan.page.scss'],
})
export class SrisuphanPage {

  data_attr: any ;
  result: any ;
  score: any ;
  count: any;

  constructor(public navCtrl: NavController,public http:HttpClient) 
  { 
    this.loaddata(12);  
    this.loaddata_score(12);
    this.load_countreviews(12);
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

  openLinkInSystemBrowser(url:string){
    window.open(url, '_system', 'location-yes');
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
