import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disabletextbox',
  templateUrl: './disabletextbox.component.html',
  styleUrls: ['./disabletextbox.component.css']
})
export class DisabletextboxComponent implements OnInit {

  constructor() { }
  name = "Naynesh";
  showbox = true;
  ngOnInit(): void {
  }
  enableBox(){
    this.showbox = false;
  }
}
