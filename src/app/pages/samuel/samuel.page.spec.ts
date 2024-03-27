import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamuelPage } from './samuel.page';

describe('SamuelPage', () => {
  let component: SamuelPage;
  let fixture: ComponentFixture<SamuelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
