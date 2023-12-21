import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  constructor(private http: HttpClient) {}

  public getDatas() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
