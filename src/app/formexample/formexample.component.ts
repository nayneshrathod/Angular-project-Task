import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formexample',
  templateUrl: './formexample.component.html',
  styleUrls: ['./formexample.component.css']
})
export class FormexampleComponent implements OnInit {
  nm = [];
  constructor() { }
  onSubmit(value) {
    this.nm = value;
    console.log(value)
  }
  ngOnInit(): void {
  }

}
