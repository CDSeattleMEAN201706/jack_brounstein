import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatsDetailComponent } from './rats-detail.component';

describe('RatsDetailComponent', () => {
  let component: RatsDetailComponent;
  let fixture: ComponentFixture<RatsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
