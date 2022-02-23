import { Component, OnInit} from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs'
import { DatapassService } from '../datapass.service';
import { ViewChild,ElementRef } from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {

  checkin: any = {};
  username ;
  iduser;
  test;
  
  map:any;
  @ViewChild('map',{read: ElementRef,static: false}) mapRef: ElementRef;
  infoWindows: any = [];
  markers: any = [
    {
      title: "วัดพระธาตุดอยสุเทพ",
      latitude: "18.804912",
      longitude: "98.922064"
    }
  ]


  constructor(public navCtrl: NavController,
    public http:HttpClient,
    public alertController: AlertController,
    public datapass:DatapassService)
  { 
    this.checkin.id_attr = 3;
    this.dataUser();
  }

  ngOnInit(): void{
  }

  ionViewDidEnter(){
    this.showmap();
  }

  addMarkersToMap(markers){
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content"></div>' +
                                '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude:' + marker.latitude + '</p>'  +
                              '<p>Longitude:' + marker.longitude + '</p>'  +
                              '<div>';
    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });

    marker.addListener('click',() => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }
  
  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }
  
  showmap(){
    const location = new google.maps.LatLng(18.804912,98.922064);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  insertdata(){
    this.iduser = this.datapass.id_user;
    this.username = this.datapass.username;
      let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/insert-checkin.php';
      let dataPost = new FormData();
      dataPost.append('iduser',this.iduser);
      dataPost.append('id_attr',this.checkin.id_attr);

      let data:Observable<any> = this.http.post(url,dataPost);
      data.subscribe(data =>{
        this.ShowAlert();
        this.navCtrl.navigateBack("/doisuthep");
      });
  }

  async ShowAlert() {
    const alert =await this.alertController.create({
      header: 'คุณได้ทำการเช็คอินแล้ว',
      message: '',
      buttons:['OK']
    });

    await alert.present();
  }

  dataUser(){
    this.username = this.datapass.username;
    console.log("DataUser : ",this.username);
  }

}
