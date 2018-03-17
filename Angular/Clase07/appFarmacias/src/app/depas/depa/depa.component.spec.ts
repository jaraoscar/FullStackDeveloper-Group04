import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepaComponent } from './depa.component';

describe('DepaComponent', () => {
  let component: DepaComponent;
  let fixture: ComponentFixture<DepaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
