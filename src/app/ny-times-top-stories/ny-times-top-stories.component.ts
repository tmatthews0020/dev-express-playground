import { Component, OnInit } from '@angular/core';
import { NytimesService } from '../services/nytimes.service';

@Component({
  selector: 'app-ny-times-top-stories',
  templateUrl: './ny-times-top-stories.component.html',
  styleUrls: ['./ny-times-top-stories.component.scss']
})
export class NyTimesTopStoriesComponent implements OnInit {

 
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
    this.nyTimesService.currentStories$.subscribe((res) => { this.stories = res });
    this.nyTimesService.getTopStories(this.topic).subscribe(() => { return } );
  }

  applyFilter(topic: string){
    this.topic = topic;
    this.nyTimesService.getTopStories(topic).subscribe(() => { return });
  }
}
