import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Section } from '../models/section';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SectionService {

  public api = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  public getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.api}/api/sections`);
  }

  public updateSection(section: Section, id: number): Observable<Section> {
    return this.http.put<Section>(`${this.api}/api/sections/${id}`, section);
  }
}
