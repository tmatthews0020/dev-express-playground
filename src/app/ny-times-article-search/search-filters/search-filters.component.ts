import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ArticleSearchService } from '../article-search.service';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {
  
  constructor(
    private fb: FormBuilder,
    private articleSearchService: ArticleSearchService
  ) { }

  form: FormGroup;

  ngOnInit() {
    this.form  = this.fb.group({
      publicationDateStart: this.fb.control( new Date(), Validators.required),
      publicationDateEnd: this.fb.control( new Date(), Validators.required)
    });

    this.form.valueChanges.subscribe((val: FormGroup) => {
      debugger;
      this.articleSearchService.updateSearchFilters(val);
    })
  }
}
