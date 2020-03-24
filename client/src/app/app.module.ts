import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeComponent } from './home/components/prime/prime.component';
import { StoryComponent } from './home/components/story/story.component';
import { CraftComponent } from './home/components/craft/craft.component';
import { HomeComponent } from './home/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrimeComponent,
    StoryComponent,
    CraftComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
