import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {

  sub: Subject<string>;
  td: string;
  set testdata(s: string){
    this.sub.next(s);
  }
  get testdata(){
    return this.td;
  }

  constructor() {
    this.sub = new Subject<string>();
  }

  ngOnInit() {
    this.sub.subscribe(test => {
      this.td += test;
    });
  }

}
