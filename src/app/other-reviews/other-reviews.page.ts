import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AlertController, NavController,NavParams  } from '@ionic/angular';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-other-reviews',
  templateUrl: './other-reviews.page.html',
  styleUrls: ['./other-reviews.page.scss'],
})
export class OtherReviewsPage  {

  result: any = [];

  constructor(public http:HttpClient,public navCtrl: NavController,public datapass:DatapassService) 
  {
    this.loadDataList_attrName();
  }

  loadDataList_attrName(){
    let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/loadDataList_attrName.php';
    let data:Observable<any> = this.http.get(url);
    data.subscribe(data =>{
      this.result = data
      console.log("Done :",this.result);
    });
  }

  goToPage(nameAttr:any){
    console.log("Param is :",nameAttr);
    this.datapass.attr_name = nameAttr;
    this.navCtrl.navigateForward('/other-attr');
  }
}
