import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  public boundData: string;
  public datachange="";
  public action="";
  public test: string;
  public dropdownvar: string;
  public dropdownitems = [];
  public dropdownstatus = "";
  public mch: Subject<string>;
  public mchlist = [];
  public cnt = 0;
  constructor() { }

  ngOnInit() {
    this.dropdownitems.push("dd item one");
    this.dropdownitems.push("dd item two");
    this.dropdownitems.push("dd item three");
    this.dropdownvar = "dd item two";
  }
  ngmChange(){
    this.mchlist.push("changed " + this.cnt);
    this.cnt++;
  }
  clearList() {
    this.mchlist = [];
  }
  keyup(d: any){
    this.datachange = d;
    this.test="";
  }

  keydown(d){
    this.datachange = d;
  }
  keypress(d){
    this.datachange = d;
  }
  change(d){
    this.datachange = d;
  }
  paste(d: string){
    this.datachange = "paste: " + d;
  }
  input2(d: string){
    this.datachange = d;
  }
  updateDropDown(){
    this.dropdownstatus = "updated";
  }
}
