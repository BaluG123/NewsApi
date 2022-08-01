import { Component } from '@angular/core';
import { NewsApiService } from './services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsApi';
  lists:any;
  constructor(private newsdata:NewsApiService){
    newsdata.lists().subscribe((data)=>{
      this.lists=data.articles;
    });
  }
}
