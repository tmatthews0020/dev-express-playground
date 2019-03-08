import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleSearchService } from '../article-search.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private articleSearchService: ArticleSearchService
  ) { }

  form: FormGroup;

  ngOnInit() {
  
    this.form = this.fb.group({
      search: this.fb.control('')
    })

    this.form.get('search').valueChanges.subscribe((val) => {
      this.articleSearchService.updateSearchQuery(val);
    })
  }
}
