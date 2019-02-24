import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
  ) { }

  form: FormGroup;

  ngOnInit() {
  
    this.form = this.fb.group({
      search: this.fb.control('')
    })

    this.form.get('search').valueChanges.subscribe((val) => {
      this.search.emit(val);
    })
  }
}
