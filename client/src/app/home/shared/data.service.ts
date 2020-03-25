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

  configUrl = 'http://localhost:3000/api/movies';

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie> {
    const url = `${this.configUrl}`;
    return this.http.get<Movie>(url);
  }
}
