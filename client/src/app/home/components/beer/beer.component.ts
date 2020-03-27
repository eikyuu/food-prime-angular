import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../shared/section';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  @Input() sections: Section;

  constructor() { }

  ngOnInit() {
  }

}
