import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Movie } from '../../shared/movie';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public datas;

  constructor(public dataService: DataService) { }

   ngOnInit() {
    this.dataService.getMovies().subscribe(
            (paramMovies: Movie) => {
               this.datas =  paramMovies;
               console.log(this.datas);
            }
        );
  }
}
