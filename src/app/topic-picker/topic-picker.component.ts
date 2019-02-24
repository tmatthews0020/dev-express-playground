import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-topic-picker',
  templateUrl: './topic-picker.component.html',
  styleUrls: ['./topic-picker.component.scss']
})
export class TopicPickerComponent implements OnInit {

  @Input() topics: string[];
  @Output() topic: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(
    private fb: FormBuilder
  ) { }

  form: FormGroup;


  ngOnInit() {
      this.form = this.fb.group({
        topic: this.fb.control('science', Validators.required)
      })
  }

  applyFilter(){
    this.topic.emit(this.form.get('topic').value);
  }
}
