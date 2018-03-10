import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDepartamentosComponent } from './edicion-departamentos.component';

describe('EdicionDepartamentosComponent', () => {
  let component: EdicionDepartamentosComponent;
  let fixture: ComponentFixture<EdicionDepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionDepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
