import { Component, Input, OnInit } from '@angular/core';
import { Anime2 } from '../Anime2';

@Component({
  selector: 'app-anime2-detail',
  templateUrl: './anime2-detail.component.html',
  styleUrls: ['./anime2-detail.component.css']
})
export class Anime2DetailComponent implements OnInit {

  @Input() animeDetail!: Anime2;

  constructor() { }

  ngOnInit() {
  }

}
