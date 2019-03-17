import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.boundData = "started";
  }
  ngmChange(){
    this.action="ngmChange";
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
    this.datachange = d;
  }
  input(d: string){
    this.datachange = d;
  }
}
