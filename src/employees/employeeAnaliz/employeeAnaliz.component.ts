import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'employeeAnaliz',
  templateUrl: './employeeAnaliz.component.html',
  styleUrls: ['./employeeAnaliz.component.css']
})
export class employeeAnalizComponent implements OnInit {
    title="analiz";
    day: string[];
    constructor() {
      this.day = ["Pazartesi","salı","çarşamba","perşembe","cuma","cumartesi","pazar"];
    }
    ngOnInit() {
    }
}