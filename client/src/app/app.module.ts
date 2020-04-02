import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimeComponent } from './components/prime/prime.component';
import { StoryComponent } from './components/story/story.component';
import { CraftComponent } from './components/craft/craft.component';
import { HomeComponent } from './pages/home/home.component';
import { BeerComponent } from './components/beer/beer.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrimeComponent,
    StoryComponent,
    CraftComponent,
    HomeComponent,
    BeerComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminSectionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
