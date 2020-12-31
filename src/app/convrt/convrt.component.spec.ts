import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvrtComponent } from './convrt.component';

describe('ConvrtComponent', () => {
  let component: ConvrtComponent;
  let fixture: ComponentFixture<ConvrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
