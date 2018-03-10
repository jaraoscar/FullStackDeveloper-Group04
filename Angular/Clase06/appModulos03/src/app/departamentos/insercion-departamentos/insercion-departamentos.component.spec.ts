import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsercionDepartamentosComponent } from './insercion-departamentos.component';

describe('InsercionDepartamentosComponent', () => {
  let component: InsercionDepartamentosComponent;
  let fixture: ComponentFixture<InsercionDepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsercionDepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsercionDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
