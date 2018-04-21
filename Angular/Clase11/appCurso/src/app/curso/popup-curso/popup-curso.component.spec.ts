import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCursoComponent } from './popup-curso.component';

describe('PopupCursoComponent', () => {
  let component: PopupCursoComponent;
  let fixture: ComponentFixture<PopupCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
