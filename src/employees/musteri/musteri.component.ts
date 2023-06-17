import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'musteri',
  templateUrl: './musteri.component.html',
  styleUrls: ['./musteri.component.css']
})
export class musteriComponent  implements OnInit {
  title="Öğrenciler";
  city: string[];
  constructor() {
    this.city = ["Kayseri","İstanbul","Ankara"];
  }
  ngOnInit() {
  }
}