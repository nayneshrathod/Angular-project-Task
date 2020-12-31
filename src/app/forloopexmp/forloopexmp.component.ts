import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloopexmp',
  templateUrl: './forloopexmp.component.html',
  styleUrls: ['./forloopexmp.component.css']
})
export class ForloopexmpComponent implements OnInit {

  constructor() { }
data = ['Naynesh','Nitin','Sham','Sarju'];
dataarr = [
  {name:'Naynesh', age:26},
  {name:'Nitin', age:28},
  {name:'Sarju', age:21},
  {name:'Sham', age:29},
]
  ngOnInit(): void {
  }

}
