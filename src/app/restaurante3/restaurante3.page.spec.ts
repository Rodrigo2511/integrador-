import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurante3Page } from './restaurante3.page';

describe('Restaurante3Page', () => {
  let component: Restaurante3Page;
  let fixture: ComponentFixture<Restaurante3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Restaurante3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
