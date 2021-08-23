import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommunitiesComponent } from './list-communities.component';

describe('ListCommunitiesComponent', () => {
  let component: ListCommunitiesComponent;
  let fixture: ComponentFixture<ListCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
