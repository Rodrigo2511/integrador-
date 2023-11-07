import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurante4Page } from './restaurante4.page';

describe('Restaurante4Page', () => {
  let component: Restaurante4Page;
  let fixture: ComponentFixture<Restaurante4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Restaurante4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
