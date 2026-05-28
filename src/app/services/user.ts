import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl = "https://verion-backend.onrender.com";

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<any[]>(this.apiUrl);
  }

}