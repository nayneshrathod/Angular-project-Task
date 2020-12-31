import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForloopexmpComponent } from './forloopexmp.component';

describe('ForloopexmpComponent', () => {
  let component: ForloopexmpComponent;
  let fixture: ComponentFixture<ForloopexmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForloopexmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForloopexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
