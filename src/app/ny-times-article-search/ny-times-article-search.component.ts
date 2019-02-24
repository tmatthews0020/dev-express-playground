import { Component, OnInit } from '@angular/core';
import { NytimesService } from '../services/nytimes.service';

@Component({
  selector: 'app-ny-times-article-search',
  templateUrl: './ny-times-article-search.component.html',
  styleUrls: ['./ny-times-article-search.component.scss']
})
export class NyTimesArticleSearchComponent implements OnInit {

  constructor(
    private nyTimesService: NytimesService
  ) { }


  search: string;
  searchResults: any[];

  ngOnInit() {
  }

  searchInput(search: string){
    this.search = search
    this.nyTimesService.currentArticleSearch$.subscribe((res) => this.searchResults = res );
    this.nyTimesService.searchArticles(search).subscribe(() => { return });
  }
}
