import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-scorereviews',
  templateUrl: './scorereviews.page.html',
  styleUrls: ['./scorereviews.page.scss'],
})
export class ScorereviewsPage {

  result: any = [];
  param: string = "review_attr";
  score: any = [];
  rscore : any = [] ;
  resscore : any = [] ;

  constructor(public http: HttpClient) {
    this.loaddata_topscore();
  }

  loaddata_topscore() {
    let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/gettopscore.php';

    let data:Observable<any> = this.http.get(url);
    data.subscribe(data =>{
      if(data != null){
        this.result = data
        // this.resscore = Math.round(this.rscore)
        console.log("successed :",this.result);
      }else{
        console.log("Data is null.");
      }
    });
  }



  }
