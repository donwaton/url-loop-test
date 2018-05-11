import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Shares } from './domain/shares';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  periodo = "i15";
  i = 0;
  urlshare = "";
  shares = localStorage.getItem("shares");

  constructor(private sanitizer : DomSanitizer) { 
   
  }

  ngOnInit() {
    console.log(this.shares);
    this.urlshare = "https://elite.finviz.com/quote.ashx?t="+this.shares[this.i]+"&ty=c&ta=2&p="+this.periodo+"&b=1";
  }

  updateSharesList(data){
    localStorage.removeItem('shares');
    let testsplit = data.split('   ');
    localStorage.setItem('shares', JSON.stringify(testsplit));
    this.shares = JSON.parse(localStorage.getItem("shares"));
    this.urlshare = "https://elite.finviz.com/quote.ashx?t="+this.shares[this.i]+"&ty=c&ta=2&p="+this.periodo+"&b=1";
  }

  getEmbedUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlshare);
  }

  nextShare(){
    if(this.i<(this.shares.length-1)){
      this.i++;
    }
    this.urlshare = "https://elite.finviz.com/quote.ashx?t="+this.shares[this.i]+"&ty=c&ta=2&p="+this.periodo+"&b=1";
  }
  previousShare(){
    if(this.i>0){
      this.i--;
    }
    this.urlshare = "https://elite.finviz.com/quote.ashx?t="+this.shares[this.i]+"&ty=c&ta=2&p="+this.periodo+"&b=1";
  }

  updateTime(tiempo){
    this.periodo = tiempo;
    this.urlshare = "https://elite.finviz.com/quote.ashx?t="+this.shares[this.i]+"&ty=c&ta=2&p="+this.periodo+"&b=1";
  }
}
