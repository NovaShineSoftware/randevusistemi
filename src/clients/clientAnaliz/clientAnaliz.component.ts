import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'clientAnaliz',
  templateUrl: './clientAnaliz.component.html',
  styleUrls: ['./clientAnaliz.component.css']
})
export class clientAnalizComponent implements OnInit {
    title="analiz";
    day: string[];
    constructor() {
      this.day = ["Pazartesi","salı","çarşamba","perşembe","cuma","cumartesi","pazar"];
    }
    ngOnInit() {
    }
}