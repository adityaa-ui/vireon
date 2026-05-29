import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl = "https://vireon-ha8n.onrender.com";

  constructor(private http: HttpClient) {}

  login(data: any){
    return this.http.post(`${this.apiUrl}/login`, data);
  }
  register(data: any){
  return this.http.post(
    `${this.apiUrl}/register`,
    data
  );
}

}