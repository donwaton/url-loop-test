import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Shares } from './domain/shares';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  autoupdate = false;
  actualizar = false;
  periodo = "i15";
  refreshTime = 2500;
  i = 0;
  urlshare = "";
  urldetail = "";
  shares = JSON.parse(localStorage.getItem("shares"));
  //BKD   ELGX   CPRX   TYME   TRXC   CPRX   QUIK   VBIV   MFIN   FBIO   NBEV

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.setUrl();
  }
  
  setUrl(){
    this.urldetail = "https://www.barchart.com/stocks/quotes/" + this.shares[this.i] + "/interactive-chart";
    this.urlshare = "https://elite.finviz.com/quote.ashx?t=" + this.shares[this.i] + "&ty=c&ta=2&p=" + this.periodo + "&b=1";
  }

  updateSharesList(data) {
    localStorage.removeItem('shares');
    let testsplit = data.split('   ');
    localStorage.setItem('shares', JSON.stringify(testsplit));
    this.shares = JSON.parse(localStorage.getItem("shares"));
    this.i = 0;
    this.setUrl();
    this.actualizar = false;
  }

  getEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlshare);
  }

  nextShare() {
    if (this.i < (this.shares.length - 1)) {
      this.i++;
    }
    this.setUrl();
    console.log(this.shares[this.i]);
  }

  previousShare() {
    if (this.i > 0) {
      this.i--;
    }
    this.setUrl();
  }

  updateTime(tiempo) {
    this.periodo = tiempo;
    this.setUrl();
  }

  openUpdate() {
    this.actualizar = !this.actualizar;
  }

  autoUpdate(){
    if(this.autoupdate == true && this.i < (this.shares.length - 1)){
      setTimeout(() => {
        if(this.autoupdate == true){
          this.nextShare(); 
          this.autoUpdate();
        }
      }, this.refreshTime);
    } 
    else {
      this.autoupdate = false;
      this.setUrl();
      alert("Fin");
    }
  }
  
  setAutoUpdate(speed) {
    if(speed!=""){
      this.refreshTime = speed*1000;
    }
    this.autoupdate = !this.autoupdate;
    if (this.autoupdate == true && this.i < (this.shares.length - 1)) {
      this.autoUpdate();
    }
    else {
      this.setUrl();
    }     
  }

  restart(){
    this.i=0;
    this.setUrl();
  }
}
