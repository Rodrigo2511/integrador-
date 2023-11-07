import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IMGPage } from './img.page';

describe('IMGPage', () => {
  let component: IMGPage;
  let fixture: ComponentFixture<IMGPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IMGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
