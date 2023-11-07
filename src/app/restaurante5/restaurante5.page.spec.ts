import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurante5Page } from './restaurante5.page';

describe('Restaurante5Page', () => {
  let component: Restaurante5Page;
  let fixture: ComponentFixture<Restaurante5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Restaurante5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
