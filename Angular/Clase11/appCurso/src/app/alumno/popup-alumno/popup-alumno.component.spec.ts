import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAlumnoComponent } from './popup-alumno.component';

describe('PopupAlumnoComponent', () => {
  let component: PopupAlumnoComponent;
  let fixture: ComponentFixture<PopupAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
