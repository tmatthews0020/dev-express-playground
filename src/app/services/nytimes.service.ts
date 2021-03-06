import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { BehaviorSubject, Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NytimesService {
  constructor(
    private httpClient: HttpClient,
  ) { 
  }


  private currentStoriesSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public currentStories$: Observable<any[]> = this.currentStoriesSub.asObservable();

  private currentSearchSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public currentArticleSearch$: Observable<any[]> = this.currentSearchSub.asObservable();

  public topics: string[] = [
    'science',
    'arts',
    'automobiles',
    'books',
    'business',
    'food',
    'technology'
  ]

  getTopStories(topic: string){
    const url = `https://api.nytimes.com/svc/topstories/v2/${topic}.json`
    return this.httpClient.get(url,{
      params: new HttpParams().set('api-key', environment.nyTimesAPIKey)
    }).pipe(
      map((res: any) => { this.currentStoriesSub.next(res.results)})
    )
  }

  searchArticles(search: string, filters: any){
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`
    return this.httpClient.get(url,{
      params: new HttpParams()
        .set('api-key', environment.nyTimesAPIKey)
        .set('q', search)
    }).pipe(
      map((res: any) => { this.currentSearchSub.next(res.response.docs)})
    )
  }
}
