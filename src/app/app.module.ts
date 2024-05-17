import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Anime2Module } from './Anime2/Anime2.module';
import { Anime2ListComponent } from './Anime2/anime2-list/anime2-list.component';
@NgModule({
  declarations: [	
    AppComponent,
    Anime2Module, 
    Anime2ListComponent
   ],
   exports:[Anime2Module,
    Anime2ListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
