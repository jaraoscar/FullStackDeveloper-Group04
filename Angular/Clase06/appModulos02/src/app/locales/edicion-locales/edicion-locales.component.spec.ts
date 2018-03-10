import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionLocalesComponent } from './edicion-locales.component';

describe('EdicionLocalesComponent', () => {
  let component: EdicionLocalesComponent;
  let fixture: ComponentFixture<EdicionLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
