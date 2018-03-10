import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLocalesComponent } from './listado-locales.component';

describe('ListadoLocalesComponent', () => {
  let component: ListadoLocalesComponent;
  let fixture: ComponentFixture<ListadoLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
