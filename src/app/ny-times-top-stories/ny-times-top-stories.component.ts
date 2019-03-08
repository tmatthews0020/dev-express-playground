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
  topics = this.nyTimesService.topics;
  // default science
  topic = 'science';
  columns: any[];

  ngOnInit(){
    this.nyTimesService.currentStories$.subscribe((res) => { this.stories = res });

    this.nyTimesService.getTopStories(this.topic).subscribe(() => { return } );
    
    this.columns = this.getColumns();
  }


  applyFilter(topic: string){
    this.topic = topic;
    this.nyTimesService.getTopStories(topic).subscribe(() => { return });
  }

  getColumns(){
    return [
        this.titleColumn(),
        'abstract',
        'url'
    ]
  }


  titleColumn(){
    return {
      dataField: 'title'
    }
  }

  customLoad(){
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem('gridData')))
    });
  }

  customSave(state){
      localStorage.setItem('gridData', JSON.stringify(state));
  }
}
