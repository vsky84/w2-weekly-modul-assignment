import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from './../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  myData = {
    nama:"Jovan Sky",
    umur:"25"
  }
  constructor(public navCtrl: NavController) {

  }
  showClicked() {
    console.log("Button is clicked.");
  }
  goToFirst() {
    this.navCtrl.push(FirstPage,this.myData);
  }
}
