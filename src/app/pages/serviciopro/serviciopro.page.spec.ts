import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioproPage } from './serviciopro.page';

describe('ServicioproPage', () => {
  let component: ServicioproPage;
  let fixture: ComponentFixture<ServicioproPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
