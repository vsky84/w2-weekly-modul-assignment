import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecondPage } from '../second/second';
/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  nama=""
  umur="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.nama = this.navParams.get("nama");
    this.umur = this.navParams.get("umur");
    console.log(this.nama + " berumur " + this.umur);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
  goToSecond() {
    this.navCtrl.push(SecondPage);
  }

}
