import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl = "https://vireon-ha8n.onrender.com";

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<any[]>(this.apiUrl);
  }

}