import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspostListComponent } from './newspost-list.component';

describe('NewspostListComponent', () => {
  let component: NewspostListComponent;
  let fixture: ComponentFixture<NewspostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
