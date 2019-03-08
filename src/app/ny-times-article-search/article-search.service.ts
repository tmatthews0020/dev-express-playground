import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleSearchService {

  constructor() { }

  private searchFiltersSub: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public searchFilters$: Observable<any> = this.searchFiltersSub.asObservable();

  private searchQuerySub: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public searchQuery$: Observable<any> = this.searchQuerySub.asObservable();


  updateSearchFilters(val: any){
    this.searchFiltersSub.next(val);
  }

  updateSearchQuery(val: any){
    this.searchQuerySub.next(val);
  }
}
