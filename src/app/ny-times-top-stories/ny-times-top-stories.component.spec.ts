import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyTimesTopStoriesComponent } from './ny-times-top-stories.component';

describe('NyTimesTopStoriesComponent', () => {
  let component: NyTimesTopStoriesComponent;
  let fixture: ComponentFixture<NyTimesTopStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyTimesTopStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyTimesTopStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
