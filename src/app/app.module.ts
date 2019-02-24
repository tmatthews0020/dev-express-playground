import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { TopicPickerComponent } from './ny-times-top-stories/topic-picker/topic-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NyTimesTopStoriesComponent } from './ny-times-top-stories/ny-times-top-stories.component';
import { NyTimesArticleSearchComponent } from './ny-times-article-search/ny-times-article-search.component';
import { SearchPanelComponent } from './ny-times-article-search/search-panel/search-panel.component';
import { SearchResultsComponent } from './ny-times-article-search/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicPickerComponent,
    NyTimesTopStoriesComponent,
    NyTimesArticleSearchComponent,
    SearchPanelComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DevExtremeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
