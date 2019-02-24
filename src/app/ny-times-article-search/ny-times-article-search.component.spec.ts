import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyTimesArticleSearchComponent } from './ny-times-article-search.component';

describe('NyTimesArticleSearchComponent', () => {
  let component: NyTimesArticleSearchComponent;
  let fixture: ComponentFixture<NyTimesArticleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyTimesArticleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyTimesArticleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
