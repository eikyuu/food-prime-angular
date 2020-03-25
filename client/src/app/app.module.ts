import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeComponent } from './home/components/prime/prime.component';
import { StoryComponent } from './home/components/story/story.component';
import { CraftComponent } from './home/components/craft/craft.component';
import { HomeComponent } from './home/pages/home/home.component';
import { BeerComponent } from './home/components/beer/beer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrimeComponent,
    StoryComponent,
    CraftComponent,
    HomeComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
