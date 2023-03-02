import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [DataService]
})
export class AboutComponent {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];
  infoReceived4: string[] = [];
  showAuthorInfo1 = false;
  showAuthorInfo2 = false;
  showAuthorInfo3 = false;
  showAuthorInfo4 = false;
  constructor(private dservice: DataService){

  }
  toggleAuthorInfo1(){
    this.showAuthorInfo1 = !this.showAuthorInfo1;
    if (this.showAuthorInfo1) {
      this.infoReceived1 = this.dservice.getInfo1();
    }
    else{
      this.infoReceived1 = [];
    }
  }
  toggleAuthorInfo2(){
    this.showAuthorInfo2 = !this.showAuthorInfo2;
    if (this.showAuthorInfo2) {
      this.infoReceived2 = this.dservice.getInfo2();
    }
    else{
      this.infoReceived2 = [];
    }
  }
  toggleAuthorInfo3(){
    this.showAuthorInfo3 = !this.showAuthorInfo3;
    if (this.showAuthorInfo3) {
      this.infoReceived3 = this.dservice.getInfo3();
    }
    else{
      this.infoReceived3 = [];
    }
  }
  toggleAuthorInfo4(){
    this.showAuthorInfo4 = !this.showAuthorInfo4;
    if (this.showAuthorInfo4) {
      this.infoReceived4 = this.dservice.getInfo4();
    }
    else{
      this.infoReceived4 = [];
    }
  }
}
