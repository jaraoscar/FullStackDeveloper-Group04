import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMovilComponent } from './menu-movil.component';

describe('MenuMovilComponent', () => {
  let component: MenuMovilComponent;
  let fixture: ComponentFixture<MenuMovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
