import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspostDetailComponent } from './newspost-detail.component';

describe('NewspostDetailComponent', () => {
  let component: NewspostDetailComponent;
  let fixture: ComponentFixture<NewspostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspostDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
