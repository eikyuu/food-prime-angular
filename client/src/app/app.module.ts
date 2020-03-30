import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeComponent } from './home/components/prime/prime.component';
import { StoryComponent } from './home/components/story/story.component';
import { CraftComponent } from './home/components/craft/craft.component';
import { HomeComponent } from './home/pages/home/home.component';
import { BeerComponent } from './home/components/beer/beer.component';
import { UserComponent } from './user/user.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminSectionComponent } from './admin/components/admin-section/admin-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrimeComponent,
    StoryComponent,
    CraftComponent,
    HomeComponent,
    BeerComponent,
    UserComponent,
    AdminDashboardComponent,
    AdminSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
