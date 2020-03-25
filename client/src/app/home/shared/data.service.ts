import { Injectable } from '@angular/core';
// J'importe le client HTTP
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.api}/api/movies`);
  }
}
