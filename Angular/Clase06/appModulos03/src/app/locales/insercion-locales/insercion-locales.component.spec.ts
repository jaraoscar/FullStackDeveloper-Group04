import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsercionLocalesComponent } from './insercion-locales.component';

describe('InsercionLocalesComponent', () => {
  let component: InsercionLocalesComponent;
  let fixture: ComponentFixture<InsercionLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsercionLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsercionLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
