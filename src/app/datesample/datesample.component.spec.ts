import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesampleComponent } from './datesample.component';

describe('DatesampleComponent', () => {
  let component: DatesampleComponent;
  let fixture: ComponentFixture<DatesampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
