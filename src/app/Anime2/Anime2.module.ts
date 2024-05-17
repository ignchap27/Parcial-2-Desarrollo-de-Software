import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Anime2Component } from './Anime2.component';
import { Anime2ListComponent } from './anime2-list/anime2-list.component';

@NgModule({
  imports: [
    CommonModule,
    Anime2ListComponent
  ],
  declarations: [Anime2ListComponent],
  exports: [Anime2ListComponent]
})
export class Anime2Module { }
