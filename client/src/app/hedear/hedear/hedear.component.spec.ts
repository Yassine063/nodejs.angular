import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedearComponent } from './hedear.component';

describe('HedearComponent', () => {
  let component: HedearComponent;
  let fixture: ComponentFixture<HedearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HedearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HedearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
