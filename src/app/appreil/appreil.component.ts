import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appreil',
  templateUrl: './appreil.component.html',
  styleUrls: ['./appreil.component.scss']
})
export class AppreilComponent implements OnInit {

  appareilName  : string = 'Machine à laver';
  constructor() { }

  ngOnInit() {
  }

}
