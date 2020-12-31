import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseexmpComponent } from './ifelseexmp.component';

describe('IfelseexmpComponent', () => {
  let component: IfelseexmpComponent;
  let fixture: ComponentFixture<IfelseexmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfelseexmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelseexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
