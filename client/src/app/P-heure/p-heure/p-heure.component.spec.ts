import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHeureComponent } from './p-heure.component';

describe('PHeureComponent', () => {
  let component: PHeureComponent;
  let fixture: ComponentFixture<PHeureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PHeureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PHeureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
