import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedAnime!:Anime;
  selected:boolean = false;
  animes:Array<Anime> = []
    
  constructor(private animeService: AnimeService) { }

  getAnimes(){
    this.animeService.getAnime().subscribe(
      (animes) => {
        this.animes = animes
      });
  }

  ngOnInit() {
    this.getAnimes();
  }

  onSelected(anime:Anime){
    this.selected = true;
    this.selectedAnime = anime;
  }

}
