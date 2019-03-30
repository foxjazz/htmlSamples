import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datesample',
  templateUrl: './datesample.component.html',
  styleUrls: ['./datesample.component.css']
})
export class DatesampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  set thedate(e){ /* What gets Saved */
    const ee = e.split('-');
    if (ee.length > 0 && Number(ee[0]) > 2000) {
      const d = new Date(Date.UTC(Number(ee[0]), Number(ee[1]) - 1, Number(ee[2]) + 1));
    }
  }
  get thedate(){ /* What gets displayed */
    if(this.c.promisedByDate != null) {
      const d = new Date(this.c.promisedByDate.valueOf());
      const s = d.toLocaleDateString();
      const ee = s.split('/');
      if (ee[0].length == 1) {
        ee[0] = "0" + ee[0];
      }
      if (ee[1].length == 1) {
        ee[1] = "0" + ee[1];
      }
      const final = ee[2] + "-" + ee[0] + "-" + ee[1];
      return final;
    }
  }
}
