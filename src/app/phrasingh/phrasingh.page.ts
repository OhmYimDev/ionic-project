import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-phrasingh',
  templateUrl: './phrasingh.page.html',
  styleUrls: ['./phrasingh.page.scss'],
})
export class PhrasinghPage{

  data_attr : any;
  result: any ;
  score: any ;
  count: any;



  constructor(public navCtrl: NavController,public http:HttpClient) 
  {
    this.loaddata(4);
    this.loaddata_score(4);
    this.load_countreviews(4);


  }

  openLinkInSystemBrowser(url:string){
    window.open(url, '_system', 'location-yes');
  }


  loaddata(id:number)
  {
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




}
