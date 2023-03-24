import { Component } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  mArticles:Array<any> | undefined;
  mSources:Array<any> | undefined;

  constructor(private newsapi:NewsapiService){

  }

  ngOnInit() {
    //load articles
    this.newsapi.initArticles().subscribe((data: any) => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe((data: any)=> this.mSources = data['sources']);
  }

  searchArticles(source: any){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe((data: any) => this.mArticles = data['articles']);
  }
}
