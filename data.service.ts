import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1: string[] = ["James Carrey is an AI expert, innovator, and thought leader in the field of artificial intelligence.", "Facebook: Carrey_23"]
  info2: string[] = ["Vasnev Ludomir is a Visual communication expert, designer, and creative problem solver.", "Facebook: Vasy@34"]
  info3: string[] = ["Crosby Sawyer is a reputed developer, tech enthusiast, and leader in creating innovative web solutions.", "Facebook: Crosby#123"]
  info4: string[] = ["Emile Loupe is an Astro-physicist and dedicated to advancing our understanding of the universe.", "Facebook: Emile$90"]
  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  getInfo4():string[]{
    return this.info4
  }
  constructor() { }
}
