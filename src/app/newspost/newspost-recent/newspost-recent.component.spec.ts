import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspostRecentComponent } from './newspost-recent.component';

describe('NewspostRecentComponent', () => {
  let component: NewspostRecentComponent;
  let fixture: ComponentFixture<NewspostRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspostRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspostRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
