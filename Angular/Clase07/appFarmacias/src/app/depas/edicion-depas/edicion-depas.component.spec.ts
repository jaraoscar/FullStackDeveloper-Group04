import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDepasComponent } from './edicion-depas.component';

describe('EdicionDepasComponent', () => {
  let component: EdicionDepasComponent;
  let fixture: ComponentFixture<EdicionDepasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionDepasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
