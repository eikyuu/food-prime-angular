import { Component, OnInit } from '@angular/core';
import { Section } from '../../shared/section';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public sections: Section[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.getSections();
  }

  getSections() {
    this.dataService.getSections().subscribe(
      (paramSections) => {
         this.sections =  paramSections;
         console.log(this.sections);
      }
    );
  }
}
