import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDepasComponent } from './listado-depas.component';

describe('ListadoDepasComponent', () => {
  let component: ListadoDepasComponent;
  let fixture: ComponentFixture<ListadoDepasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDepasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
