import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeccionproPage } from './seccionpro.page';

describe('SeccionproPage', () => {
  let component: SeccionproPage;
  let fixture: ComponentFixture<SeccionproPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
