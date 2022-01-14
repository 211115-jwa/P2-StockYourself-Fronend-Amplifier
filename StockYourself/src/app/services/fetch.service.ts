import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  url:string = 'http://localhost:8080/';
  constructor() { }
}

