import { Component, OnInit } from '@angular/core';// Replace 'path/to/anime-file' with the actual path to the file containing the 'Anime' class.
import { Anime2 } from '../Anime2';
import { Anime2Service } from '../Anime2.service';

@Component({
  selector: 'app-anime2-list',
  templateUrl: './anime2-list.component.html',
  styleUrls: ['./anime2-list.component.css']
})
export class Anime2ListComponent implements OnInit {

  selected:boolean = false;
  animes:Array<Anime2> = [];
  animeSelected!:Anime2;

  constructor(private animeService:Anime2Service) { }

  getAnimes():void{
    this.animeService.getAnimes().subscribe((animes)=>{
      this.animes = animes;
    })
  }

  ngOnInit() {
    this.getAnimes();
  }

  onSelected(anime:Anime2){
    this.selected = true;
    this.animeSelected = anime;
  }
 
}
