import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioalumPage } from './servicioalum.page';

describe('ServicioalumPage', () => {
  let component: ServicioalumPage;
  let fixture: ComponentFixture<ServicioalumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioalumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
