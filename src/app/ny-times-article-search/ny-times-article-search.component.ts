import { Component, OnInit } from '@angular/core';
import { NytimesService } from '../services/nytimes.service';
import { ArticleSearchService } from './article-search.service';

@Component({
  selector: 'app-ny-times-article-search',
  templateUrl: './ny-times-article-search.component.html',
  styleUrls: ['./ny-times-article-search.component.scss']
})
export class NyTimesArticleSearchComponent implements OnInit {

  constructor(
    private nyTimesService: NytimesService,
    private articleSearchService: ArticleSearchService
  ) { }


  search: string;
  filters: any;
  searchResults: any[];

  ngOnInit() {

    this.articleSearchService.searchQuery$.subscribe((search) => {
      this.search = search
      this.nyTimesService.searchArticles(this.search, this.filters).subscribe(() => { return });
    })

    this.articleSearchService.searchFilters$.subscribe((filters) => {
      this.filters = filters;
      debugger;
      this.nyTimesService.searchArticles(this.search, this.filters).subscribe(() => { return });
    })

    this.nyTimesService.currentArticleSearch$.subscribe((res) => this.searchResults = res);

  }
}
