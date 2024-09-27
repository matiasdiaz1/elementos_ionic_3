import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeccionalumPage } from './seccionalum.page';

describe('SeccionalumPage', () => {
  let component: SeccionalumPage;
  let fixture: ComponentFixture<SeccionalumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionalumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
