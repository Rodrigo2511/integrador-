import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  createUser(user: any) {
    return this.http.post<any>(`${this.baseUrl}/users`, user);
  }
}