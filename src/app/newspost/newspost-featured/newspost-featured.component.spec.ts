import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspostFeaturedComponent } from './newspost-featured.component';

describe('NewspostFeaturedComponent', () => {
  let component: NewspostFeaturedComponent;
  let fixture: ComponentFixture<NewspostFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspostFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspostFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
