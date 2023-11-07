import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurante2Page } from './restaurante2.page';

describe('Restaurante2Page', () => {
  let component: Restaurante2Page;
  let fixture: ComponentFixture<Restaurante2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Restaurante2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
