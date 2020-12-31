import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcaseexmpComponent } from './switchcaseexmp.component';

describe('SwitchcaseexmpComponent', () => {
  let component: SwitchcaseexmpComponent;
  let fixture: ComponentFixture<SwitchcaseexmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchcaseexmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchcaseexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
