import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NyTimesTopStoriesComponent } from './ny-times-top-stories/ny-times-top-stories.component';
import { NyTimesArticleSearchComponent } from './ny-times-article-search/ny-times-article-search.component';

const routes: Routes = [
  { path: 'top-stories', component: NyTimesTopStoriesComponent},
  { path: 'search-articles', component: NyTimesArticleSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
