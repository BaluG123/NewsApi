import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=430f4f72b701433a86be4010c65c9332";
  constructor(private http:HttpClient) { }
  lists():Observable<any>{
    return this.http.get(this.url)
  }
}
