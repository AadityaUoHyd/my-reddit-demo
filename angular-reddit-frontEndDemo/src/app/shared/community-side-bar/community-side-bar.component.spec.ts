import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySideBarComponent } from './community-side-bar.component';

describe('CommunitySideBarComponent', () => {
  let component: CommunitySideBarComponent;
  let fixture: ComponentFixture<CommunitySideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitySideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
