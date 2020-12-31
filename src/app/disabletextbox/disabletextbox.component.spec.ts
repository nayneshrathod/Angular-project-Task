import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabletextboxComponent } from './disabletextbox.component';

describe('DisabletextboxComponent', () => {
  let component: DisabletextboxComponent;
  let fixture: ComponentFixture<DisabletextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabletextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabletextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
