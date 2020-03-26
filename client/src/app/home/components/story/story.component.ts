import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Section } from '../../shared/section';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public datas: Section[] = [];

  constructor(public dataService: DataService) { }

   ngOnInit() {
    this.dataService.getSections().subscribe(
            (paramSections) => {
               this.datas =  paramSections;
               console.log(this.datas);
            }
        );
  }
}
