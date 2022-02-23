import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs'
import { DatapassService } from '../datapass.service';
import { ViewChild,ElementRef } from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-checkin9',
  templateUrl: './checkin9.page.html',
  styleUrls: ['./checkin9.page.scss'],
})
export class Checkin9Page {

  checkin: any = {};
  username ;
  iduser;
  test;
  
  map:any;
  @ViewChild('map',{read: ElementRef,static: false}) mapRef: ElementRef;
  infoWindows: any = [];
  markers: any = [
    {
      title: "เวียงกุมกาม",
      latitude: "18.750925",
      longitude: "98.998584"
    }
  ]


  constructor(public navCtrl: NavController,
    public http:HttpClient,
    public alertController: AlertController,
    public datapass:DatapassService)
  { 
    this.checkin.id_attr = 11;
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
    const location = new google.maps.LatLng(18.750925,98.998584);
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
    if (this.checkin.datetime != '' ) 
    {
      console.log(this.checkin.username,this.checkin.datetime,this.checkin.id_attr);
      let url: string = 'https://www.comdept.cmru.ac.th/60143227/appdata/insert-checkin.php';
      let dataPost = new FormData();
      dataPost.append('iduser',this.iduser);
      dataPost.append('id_attr',this.checkin.id_attr);

      let data:Observable<any> = this.http.post(url,dataPost);
      data.subscribe(data =>{
        this.test = data;
        console.log("test : ",this.test);
        this.ShowAlert();
        this.navCtrl.navigateBack("/wiangkumkam");
      });
    }
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
