import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../shared/models/section';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input() sections: Section;

  constructor() { }

   ngOnInit() {

   }
}
