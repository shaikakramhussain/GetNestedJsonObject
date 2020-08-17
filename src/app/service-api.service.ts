import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  constructor(private http:HttpClient) { }
  url: string = 'https://jsonplaceholder.typicode.com/users';
  getApi(){
   return this.http.get(this.url);
  }
}
