import { Component, OnInit } from '@angular/core';
import { Section } from '../../shared/models/section';
import { SectionService } from '../../shared/services/section.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public sections: Section[] = [];

  constructor(public sectionService: SectionService) { }

  ngOnInit() {
    this.getSections();
  }

  getSections() {
    this.sectionService.getSections().subscribe(
      (paramSections) => {
         this.sections =  paramSections;
         console.log(this.sections);
      }
    );
  }
}
