import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public api = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  public postUsers(user): Observable<User> {
    return this.http.post<User>(`${this.api}/api/users`, user);
  }
}
