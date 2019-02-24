import { Component, OnInit } from '@angular/core';
import { NytimesService } from './services/nytimes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private nyTimesService: NytimesService
  ){
  }

  stories: any[] = [];

  // default science
  topic = 'science';
  topics = this.nyTimesService.topics;


  ngOnInit(){
    this.getStories();
  }

  getStories(){
    this.nyTimesService.currentStories$.subscribe((res) => { debugger; this.stories = res });
    this.nyTimesService.getTopStories(this.topic).subscribe(() => { return } );
  }

  applyFilter(topic: string){
    debugger;
    this.topic = topic;
    this.nyTimesService.getTopStories(topic).subscribe(() => { return });
  }
}
