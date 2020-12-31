import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  na = "";
  na1 = "";
  clickevent(val){
    this.na = val;
  }
  clickevent1(val){
    this.na1 = val;
  }
  ngOnInit(): void {
  }

}
