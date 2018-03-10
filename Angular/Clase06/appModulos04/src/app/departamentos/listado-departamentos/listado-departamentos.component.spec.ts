import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDepartamentosComponent } from './listado-departamentos.component';

describe('ListadoDepartamentosComponent', () => {
  let component: ListadoDepartamentosComponent;
  let fixture: ComponentFixture<ListadoDepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
