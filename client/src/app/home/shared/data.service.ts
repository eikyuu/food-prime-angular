import { Injectable } from '@angular/core';
// J'importe le client HTTP
import { HttpClient } from '@angular/common/http';
import { Section } from './section';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public api = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  public getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.api}/api/sections`);
  }
}
